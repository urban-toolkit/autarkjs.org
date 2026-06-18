const fs = require('fs')
const path = require('path')

const csvPath = path.join(__dirname, '../guide/public/data/noise_manhattan_clean.csv')
const outputPath = path.join(__dirname, '../guide/public/data/noise_daily.json')

const lines = fs.readFileSync(csvPath, 'utf8').trim().split('\n')
const header = lines[0].split(',').map((h) => h.trim())
const dateIndex = header.indexOf('date')

if (dateIndex === -1) {
  throw new Error('date column not found')
}

const counts = new Map()

for (let i = 1; i < lines.length; i++) {
  const row = lines[i].split(',')
  const dateStr = row[dateIndex]?.trim()
  if (!dateStr) continue

  // Parse MM/DD/YYYY HH:MM:SS AM/PM
  const match = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/)
  if (!match) continue

  const [, month, day, year] = match
  const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  counts.set(isoDate, (counts.get(isoDate) || 0) + 1)
}

const sortedDates = Array.from(counts.keys()).sort()

const series = sortedDates.map((date) => ({ timestamp: date, value: counts.get(date) }))

const collection = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', geometry: null, properties: { series } },
  ],
}

fs.writeFileSync(outputPath, JSON.stringify(collection, null, 2))
console.log(`Wrote ${sortedDates.length} daily buckets to ${outputPath}`)
