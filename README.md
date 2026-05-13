# Acessibilidade Web - Apresentacao em HTML

Site de apresentacao em estilo deck vertical, pronto para GitHub Pages.

## Arquivos

- `index.html`: estrutura da pagina
- `style.css`: visual e responsividade
- `script.js`: conteudo dos slides e navegacao
- `assets/images/`: imagens extraidas do PowerPoint usadas em cada slide

## Como usar localmente

Abra `index.html` no navegador.

## Publicar no GitHub Pages

1. Crie um repositorio e envie estes arquivos.
2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, selecione:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (ou `master`) e pasta `/root`
4. Salve e aguarde o link publico ser gerado.

## Editando conteudo

Todo o texto dos slides esta no array `slidesData` em `script.js`.
As imagens de cada slide sao carregadas automaticamente do padrao `assets/images/image-{numero-do-slide}-1.png`.

Cada slide aceita os campos:

- `kicker`
- `title`
- `subtitle`
- `quote`
- `lead`
- `blocks` (lista de paineis)
- `callout`
