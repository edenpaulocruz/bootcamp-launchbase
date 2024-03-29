<h1 align="center">
    <img alt="LaunchBase Bootcamp" src="../assets/launchbase-bootcamp-logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 3-1: Primeiro servidor
</h3>

## Sobre o desafio

Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas `Home` e `Conteúdos`). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

*Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo.*

### Arquivos HTML

- `conteúdos.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.

- `home.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.

- `layout.njk`: Arquivo referente à base comum entre as páginas.

- `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:
    
  - layout.njk como base
    
  - Ter um texto informativo sobre o erro

  Dica: Para capturar essas requisições, basta adicionar esse trecho após todas as rotas no seu server.js:

  ```javascript
  server.use(function(req, res) {
    res.status(404).render("not-found");
  });
  ```

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.