# A1 — Validação do candidato local do Autark 5.0.0

**Resultado: passou.** O SHA `7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460` foi compilado e empacotado a partir de checkout limpo. Os manifests do checkout temporário foram ajustados para `5.0.0` apenas para tornar a resolução local inequívoca. Não é uma release oficial. O consumidor foi uma cópia descartável do site no commit `11119e9`; nenhum manifesto, lockfile ou tarball do ensaio foi commitado.

| Checagem | Resultado |
| --- | --- |
| Empacotamento — Node 26.13.0, npm 12.2.2 | `npm ci`, `npm run release:prepare -- 5.0.0`, `make build` e `npm run pack:packages` passaram. Seis tarballs. |
| Consumo — Node 22.22.0, npm 10.9.4 | Instalação dos seis tarballs e reinstalação limpa com `npm ci` passaram. `npm ls --all` passou. O umbrella e os imports diretos da sonda usam os módulos 5.0.0; a única árvore Autark 4.1.1 inspecionada é a dependência de `autk-grammar@5.6.0`. O import de DB em Node resolveu `dist/node.js`. |
| Site no Node 22 | `npm run build` passou (avisos de chunks grandes); `npm run test:usecases` passou 6/6. São testes estruturais; não validam as interações dos apps antigos. |
| Preview de produção — Chrome 158.0.8127.37, WebGPU | A sonda confirmou APIs v5 e os reexports, importou dois pontos, verificou a projeção pelo DuckDB, inicializou/desenhou o mapa, verificou o SVG do scatterplot e obteve `[15,42]` do pipeline WGSL. Worker `duckdb-browser-eh.worker.js` e `duckdb-eh.wasm` retornaram HTTP 200 em `/assets/chunks/`, no mesmo host. As extensões `spatial`/`json` vieram de `extensions.duckdb.org`; isso não prova operação offline nem o comportamento em domínio público. |

**Fora do escopo:** validação funcional dos capítulos, da galeria e dos três apps, revisão da gramática (A2) e validação de pacotes publicados. O teste da sonda não importa Grammar nem substitui homologação analítica. Nada foi publicado.

## Reproduzir

Executar da raiz do site. O primeiro bloco usa Node 26.13.0/npm 12.2.2. `TOP` é a raiz atual com as duas sondas deste documento. O clone compartilhado é local e descartável; não alterar o checkout original.

```sh
TOP="$PWD"
DIR=$(mktemp -d /tmp/autark-a1.XXXXXX)
SHA=7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460

git clone --shared --no-checkout "$TOP/../autark" "$DIR/upstream"
git -C "$DIR/upstream" switch --detach "$SHA"
(
  cd "$DIR/upstream" &&
  npm ci && npm run release:prepare -- 5.0.0 &&
  make build && npm run pack:packages -- "$DIR/tarballs"
)
mkdir "$DIR/site"
git archive 11119e9 | tar -x -C "$DIR/site"
mkdir "$DIR/browser"
cp "$TOP/docs/autark-v5-a1/a1-smoke.md" "$DIR/site/guide/"
cp "$TOP/docs/autark-v5-a1/smoke.mjs" "$DIR/browser/"
```

No **mesmo shell**, mudar `PATH` para Node 22.22.0/npm 10.9.4 (ou usar seu gerenciador de versões). O Chrome é detectado no caminho padrão do macOS; use `CHROME_BIN` quando necessário.

```sh
node -v && npm -v
cd "$DIR/site"
npm install --no-audit --save-exact "$DIR"/tarballs/*.tgz
npm ci --no-audit
npm ls --all
npm ls @urban-toolkit/autk @urban-toolkit/autk-{core,db,map,plot,compute,grammar} --all
npm run build && npm run test:usecases
npm install --prefix "$DIR/browser" --no-audit playwright-core@1.65.1
node "$DIR/browser/smoke.mjs"
```

O pack grava `tarballs/manifest.json`. As seis integridades abaixo foram conferidas com SHA-512 dos arquivos e com as entradas `file:` do lockfile temporário. São evidência desta rodada, não uma promessa de builds byte a byte iguais em outras máquinas.

| Pacote (`@urban-toolkit/`) | Integridade SHA-512 (base64) |
| --- | --- |
| `autk-core` | `Ofpzev23j47uLuMBctpATvAF00H0a6byeizppMf+CjrDU5+EH0cyjRGxV09oTAmvyUMaIGbdinGCTsCuNd0dsQ==` |
| `autk-map` | `NkNCIpviOlLK4Ce1Ezw0ZfvJ/CDJdfzCKOsR0IAsuu688YTfPJ/W3TGOJ6+IfwJU90TaAh2VJU2fbpRVG6l/rw==` |
| `autk-db` | `QGpSVMzHlmzUN8MyxZIDyDagTpSaLZB/oBZQfb4Gv9jQCq087X3cGzvfa8UdD6G5IRTvc3GUx6Zwzpn8bGBqXg==` |
| `autk-plot` | `bf6yFC43OMW5JgfhjWfE/BJxR9zaeZ/bmx4G4FFSlrc1mNzrwVz/wfCzSSyxkUZMOmpcuQNnFfsi9zXi5+lQZA==` |
| `autk-compute` | `2tYOOTQIlPHcem6Xp0Tnvp1oMnW9mjM6fLTELOapUABxmNMeL2VocSiikYcTasMD3dhqrdyl8O9UaJr+U30qUQ==` |
| `autk` | `EqcONI8OxmS3zwZ95ARPt9B8he+KVFNLkWhZC/1x4AkCZ/+OAUXRpMQ90HQFqrDx/YI2YRIh52hT8Hzo4RYgQw==` |
