# Plano de execução — autarkjs.org para Autark 5.0.0

Base: [relatório de impacto](autark-v5-site-update.md), comparando o site 4.1.1 com `../autark` no SHA `7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460`. Esse SHA é ponto de partida, não o candidato oficial. Este plano não autoriza publicação.

**Ordem:** abrir **A1** primeiro. Após A1, tocar **B** (guia/editor), **C** (galeria) e **D** (apps) em paralelo. **E** (tutorial) começa pelo piloto de B e pode avançar enquanto o restante do guia é revisado. **F** (home) independe do candidato. A preparação da gramática começa cedo em **A2** e a decisão é obrigatória antes da homologação **G**. Cada linha abaixo é uma entrega revisável; não acumular todo o trabalho em um único PR.

## A. Candidato local e compatibilidade

| Tarefa | Execução | Aceite e verificação | Spec |
| --- | --- | --- | --- |
| **A1 — Reproduzir a v5 sem npm público** | Escolher SHA com o mantenedor. Em checkout temporário do monorepo, compilar e empacotar `autk` + os cinco módulos. Instalar os seis tarballs no checkout descartável do site, com versões inequivocamente distintas do 4.1.1 quando necessário. Registrar SHA, versões de Node/npm, integridades e comandos. Não versionar `file:`, symlinks ou lockfile experimental. | `make build` e `npm run pack:packages` na toolchain upstream; `npm ls --all` no consumidor confirma quais versões cada fluxo carrega; um teste de navegador com DuckDB/WebGPU carrega WASM e workers dos artefatos locais. Repetir consumo no Node 22 do deploy; se falhar, registrar a incompatibilidade em vez de mudar CI por conta própria. A1 não exige que todo o site antigo já execute com v5. | Curta |
| **A2 — Resolver a gramática** | Conferir dependências e schema de uma versão candidata de `autk-grammar`. Preferir atualização coordenada; na ausência de versão compatível, recomendar adiar a publicação. Qualquer exceção com runtime 4.x isolado é decisão explícita e trabalho separado. Não trocar opções do schema por nomes da API imperativa por busca e substituição. | Versão e política registradas; `npm ls --all` sem mistura não planejada nas demos; todos os specs publicados validados contra o schema e executados no runtime adotado. Não usar `overrides` para simular compatibilidade. | Curta |

## B. Guia e editor compartilhado

| Tarefa | Execução | Aceite e verificação | Spec |
| --- | --- | --- | --- |
| **B1 — Piloto do editor** | Em `CodePlayground.vue`, fechar contrato de JS executável, dependências declaradas, setup/mounts e descarte de recursos. Migrar uma lição curta DB → mapa → plot com fixture local. Preservar o modo Grammar; não criar compilador TS ou segundo editor. | No navegador: editar um campo altera o resultado esperado; erro de sintaxe pode ser corrigido sem recarregar; Reset restaura código original e o próximo Run restaura saída. Rodar três vezes e navegar para fora durante uma execução não duplica handlers nem deixa saída obsoleta. Verificar um exemplo de console e um spec Grammar existente em seu runtime suportado. | Curta |
| **B2 — Intro, core e DB** | Revisar `guide/introduction.md`, `guide/autk-db/` e `HomeQuickStart.vue`: `crs`/`sourceCrs`, loaders, PBF/tag sets, `maxRasterCells`, heatmaps, updates e partes de edifícios. Distinguir tile server próprio de serviços externos opcionais. | No preview, comparar geometria bruta EPSG:4326 com a saída já projetada do DB e verificar enquadramento; editar raio/agregação de heatmap e conferir saída conhecida, incluindo NoData. Checar que instalação e trecho exibido no quick start correspondem ao que roda. | Nenhuma |
| **B3 — Mapa** | Revisar `guide/autk-map/`: clique, hover, seleção, descarte, câmera, camadas, RGB, estilos e terreno fixo/streaming. Dar preferência a exemplos curtos e locais; demonstrar tiles externos separadamente com atribuição. | Exercitar o gesto documentado, hover sem apagar seleção e limpeza com `[]`; carregar/remover terreno fixo e confirmar retorno ao plano; testar uma variante com tiles e uma câmera ortográfica. | Nenhuma |
| **B4 — Plot e Compute** | Em entregas separadas, migrar `guide/autk-plot/` e `guide/autk-compute/`. Cobrir ticks/estilo, bins, brush, hover e proveniência; bindings WGSL topológicos e resultados renderizados por classes/objetos/janelas. | Editar bins/eixo em dois gráficos ligados a mapa; verificar brush, seleção, hover e contribuições. Editar WGSL e obter valor esperado em fixture multipartes; validar associação entre janela e edifício. | Nenhuma |
| **B5 — Referência e cobertura** | Gerar TypeDoc dos cinco módulos a partir do candidato; atualizar sidebar, links e âncoras. Inventariar os playgrounds da introdução e dos quatro módulos (65 no baseline) e registrar para cada um: migrado, substituído ou removido com motivo. | `npm run build` sem links quebrados; conferir links para opções removidas e executar os exemplos alterados, inclusive os que não têm auto-run. Não tratar Markdown gerado como fonte primária. | Nenhuma |

## C. Galeria espelhada

| Tarefa | Execução | Aceite e verificação | Spec |
| --- | --- | --- | --- |
| **C1 — Provar o build multi-entry e a sincronização** | Gerar entradas HTML a partir de `../autark/gallery/catalog.ts`; publicar sob `/gallery/apps/`. Registrar SHA e método de sincronização; preferir melhorias de portabilidade upstream. Usar snapshot versionado ou artefato verificado; não puxar `main` no deploy. | Servir build com o prefixo real e abrir diretamente D06 (PBF/DB/WASM) e T02 (tiles/terreno); conferir índice, retorno, variantes, snippets apresentados, atribuição e URLs de dados. Build depois da sincronização não depende de `../autark`. | Curta |
| **C2 — Trocar catálogo e conservar URLs** | Fazer a capa `/gallery/` consumir o catálogo espelhado. Remapear as 14 rotas antigas conforme o relatório; quando a atividade mudar, manter página curta explicando o destino. Preservar aliases publicados. Não converter demos em `CodePlayground`. Atualizar documentação de manutenção. | Teste do artefato percorre as 35 entradas do baseline (ou a lista completa do SHA adotado), links, aliases e assets locais. Em Chrome/WebGPU, abrir todas e registrar interações de P03/P09, T02/T03 e A05–A08. Confirmar explicitamente o destino da experiência de janelas com plot de `ex17`. | Nenhuma após C1 |

## D. Casos de uso avançados

Depende de A1. Reimportar de um único SHA, mantendo datasets, proveniência e as rotas `/usecases/live/{urbane,shadows,heat}.html`. Um commit por app quando possível. Não confundir Urbane do tutorial com o app publicado. **Provenance** é candidato a uma entrega posterior, não um bloqueio.

| Tarefa | Execução | Aceite e verificação | Spec |
| --- | --- | --- | --- |
| **D1 — Urbane** | Migrar interação e testar com cache frio. | Abrir o wrapper no preview, ver geometria, selecionar bairro, mudar métrica, descer para edifícios e voltar; verificar limpeza da seleção e ligação com gráfico. | Nenhuma |
| **D2 — Shadows** | Migrar shader e bindings em conjunto; estabelecer valores de referência antes da mudança. | Fixture de estrada multipartes não cria cruzamento entre partes e não conta mais de uma vez por amostra. Conferir minutos e percentuais, troca de mês, seleção de edifício e histograma no wrapper. Documentar diferenças esperadas de 4.1.1. | Curta |
| **D3 — Heat / Niterói** | Migrar interação e configuração dos plots. | No wrapper, testar seleção de ruas, brush e troca de ano; comparar NoData e amostra de regressão com a referência, incluindo correspondência de IDs. | Nenhuma |

Para D1–D3, rodar `npm run build && npm run test:usecases` e `npm run preview`; registrar browser/WebGPU, tempo de carga, erros de rede e amostras verificadas. O teste estrutural não substitui o teste interativo.

## E. Tutorial de Urban Visual Analytics

| Tarefa | Execução | Aceite e verificação | Spec |
| --- | --- | --- | --- |
| **E1 — Estrutura, formatos e DB** | Após B1, criar landing e sidebar em `/tutorial/`, com objetivo, exercício, resultado esperado e próximos passos. Confirmar redistribuição de dados/figuras antes de incorporá-los; preservar créditos e ODbL. Adotar PBF/fixtures locais para o caminho principal, sem prometer operação totalmente offline. | Em desktop/mobile e temas claro/escuro, abrir diretamente cada página e editar os exercícios de formato e DB sem estado vindo de outro capítulo. Tarefas e créditos são navegáveis por teclado. | Curta |
| **E2 — Mapa e Plot** | Reusar padrões de B3/B4; agrupar células dependentes apenas quando isso ajudar a leitura. Ensinar com seleção, hover e brush ligados. | Mudar um atributo/bin altera a saída; Reset e novo Run recuperam o resultado. Ao navegar, mapas e plots anteriores são descartados. Sem `window.ctx` nem CodeMirror paralelo. | Nenhuma |
| **E3 — Compute, projeto final e navegação** | Adicionar WGSL leve e sky exposure sob demanda; decompor Urbane em exercícios e ligar ao app de D1. Só então apontar o menu para `/tutorial/`, preservando Observable como fonte histórica. | Exercícios editáveis produzem resultado verificável, do zero ou após reset; `npm run build` e revisão em Chrome/WebGPU confirmam as rotas e o link para o caso completo. | Nenhuma |

## F. Home, redes e instituições

| Tarefa | Execução | Aceite e verificação | Spec |
| --- | --- | --- | --- |
| **F1 — Redes** | Adicionar X e Bluesky em `socialLinks` com ícones locais e rótulos acessíveis, preservando GitHub. | Confirmar os destinos `https://x.com/autarkjs` e `https://bsky.app/profile/autarkjs.bsky.social`; testar topo, menu mobile, teclado e ambos os temas. | Nenhuma |
| **F2 — FGV** | Receber a marca aprovada (incluindo variante para fundo escuro, se necessária); inserir no rodapé institucional. | Ordem UFF → FGV → NYU → UIC no layout e no teclado; contraste e quebra de linha adequados em mobile. | Nenhuma |
| **F3 — Vídeo** | Com o arquivo em mãos, revisar 00:07–00:30 e prototipar mídia ao lado do hero, com poster e link para o vídeo completo. Se o clipe não funcionar sem áudio ou em tela pequena, usar poster no hero e vídeo abaixo. | Aprovar recorte e orçamento de transferência/LCP comparando com baseline; headline e CTAs funcionam sem mídia; pausa, legendas quando necessárias e fallback para movimento reduzido. Não incorporar original pesado ou autoplay sonoro. | Curta |

## G. Homologação e autorização

1. **Quando os pacotes oficiais e a tag existirem:** confirmar A2, executar `npm run release:prepare -- --version 5.0.0 --dry-run` e, se passar, executar o preparo real. Conferir as versões e comparar a referência/fixtures com o candidato local. Manter apenas dependências oficiais no lockfile final.
2. **No Node 22 do deploy, a partir de instalação limpa:** `npm ci`, `npm ls --all`, `npm run build`, `npm run test:usecases`, teste estrutural da galeria entregue em C2 e `git diff --check`. Fazer as verificações de guia, tutorial, Grammar, galeria e apps no preview do artefato de produção. Guardar versão, commit, resultados e pendências em um checklist de revisão; não marcar como aprovado um fluxo que apenas compilou.
3. **Pedir aceite humano:** conteúdo, interações reais, resultados analíticos, acessibilidade e visual; registrar explicitamente qualquer componente adiado. Não alterar workflows, fazer push, mesclar a `main` ou publicar sem autorização.

**O que preciso de você:** confirmação do SHA a usar como primeiro candidato (posso começar pelo SHA analisado), caminho do vídeo e arquivo aprovado da FGV. Em paralelo, identificar quem confirma os direitos dos dados do tutorial e quem coordena a versão de Grammar. Esses insumos não impedem começar A1.
