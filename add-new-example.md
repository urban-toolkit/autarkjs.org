# Como adicionar um novo exemplo

## Estrutura de um exemplo

Cada exemplo tem três partes:

| Arquivo | Descrição |
|---|---|
| `examples/exN.ts` | Lógica em TypeScript (autk-db, autk-map, etc.) |
| `examples/exN.html` | Página HTML que carrega o JS compilado via `<script type="module" src="dist/exN.js">` |
| `guide/public/imgs/exN.png` | Screenshot para aparecer na galeria |

---

## Passo a passo

### 1. Criar o TypeScript

Crie `examples/exN.ts` com a lógica do exemplo. Veja `examples/ex1.ts` como referência.

### 2. Criar o HTML

Copie um exemplo existente como base:

```bash
cp examples/ex2.html examples/ex4.html
```

Edite o HTML e ajuste:
- O título (`<title>`)
- O conteúdo do painel lateral (descrição, código de exemplo)
- A referência ao JS no final: `<script type="module" src="dist/ex4.js" defer></script>`

### 3. Registrar no vite.config.js

Adicione a nova entrada em `vite.config.js`:

```js
rollupOptions: {
  input: {
    ex1: 'examples/ex1.ts',
    ex2: 'examples/ex2.ts',
    ex3: 'examples/ex3.ts',
    ex4: 'examples/ex4.ts', // adicionar aqui
  },
  ...
}
```

### 4. Compilar os exemplos e sincronizar

```bash
npm run examples:build
```

Isso compila todos os `.ts` para `examples/dist/` e automaticamente copia o resultado para `guide/public/examples/dist/`. O build limpa o diretório antes, então todos os exemplos são recompilados juntos.

> `examples/dist/` está no `.gitignore` — os arquivos compilados não são commitados. A CI compila automaticamente no deploy.

### 5. Copiar o HTML para guide/public

```bash
cp examples/ex4.html guide/public/examples/
```

### 6. Adicionar screenshot

Tire um screenshot do exemplo funcionando e salve em:

```
guide/public/imgs/ex4.png
```

Dimensão recomendada: 16:9 (ex: 1280×720).

### 7. Adicionar na galeria

Edite `guide/.vitepress/theme/components/HomeGallery.vue` e adicione o novo exemplo ao array:

```ts
const examples = [
  // ... exemplos existentes ...
  {
    href: '/examples/ex4.html',
    img: '/imgs/ex4.png',
    title: 'Título do Exemplo',
    description: 'Descrição curta do que o exemplo faz.',
    tags: [
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-db', color: '#f59e0b' },
    ],
  },
]
```

---

## Cores das tags disponíveis

| Package | Cor |
|---|---|
| `autk-map` | `#0ea5e9` |
| `autk-db` | `#f59e0b` |
| `autk-compute` | `#8b5cf6` |
| `autk-plot` | `#22c55e` |

---

## Testar localmente

```bash
npm run dev
# acesse localhost:5173/examples/ex4.html para testar o exemplo isolado
# acesse localhost:5173 para ver a galeria atualizada
```

## Deploy

O GitHub Actions cuida do deploy automaticamente ao fazer push na branch `main`. Ele roda `examples:build` internamente, então basta commitar os arquivos fonte (`.ts`, `.html`, imgs) — os arquivos compilados são gerados na CI.
