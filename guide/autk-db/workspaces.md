# Workspaces

A workspace is an isolated DuckDB schema. Tables created in one workspace are not visible in another. This is useful when building multi-panel applications where each panel operates on a different dataset — or when you want to run several independent analyses without name conflicts.

The default workspace is `"main"` and is created automatically on `init()`.

## Switching workspaces

```typescript
await db.setWorkspace('scenario-a');
// All subsequent loads go into "scenario-a"

await db.loadCustomLayer({ ... });

await db.setWorkspace('scenario-b');
// Now loads go into "scenario-b", independent of "scenario-a"
```

If the workspace does not exist, `setWorkspace` creates it.

## Listing workspaces

```typescript
db.getWorkspaces();       // ['main', 'scenario-a', 'scenario-b']
db.getCurrentWorkspace(); // 'scenario-b'
```

## Table scope

Each workspace has its own table namespace. That means a table created in one workspace does not appear in another, even if the table names are the same.

`db.tables` always returns tables from the **current workspace** only:

```typescript
await db.setWorkspace('scenario-a');
console.log(db.tables); // only tables in "scenario-a"

await db.setWorkspace('scenario-b');
console.log(db.tables); // only tables in "scenario-b"
```

:::tip When to use workspaces
If your application has a single dataset, you don't need workspaces — the default `"main"` workspace is sufficient.
:::
