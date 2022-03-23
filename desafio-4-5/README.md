<h1 align="center">
    <img alt="LaunchBase Bootcamp" src="../assets/launchbase-bootcamp-logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 4-5: HTTP: PUT e DELETE
</h3>

## Sobre o desafio

Nessa etapa você irá implementar duas rotas: PUT e DELETE para a atualização e remoção, respectivamente, dos dados cadastrados de um professor.

### PUT

Crie uma rota para receber os dados do formulário de edição e propagar no arquivo `json`. Lembre de sobrescrever o método POST do form para PUT (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `update` para buscar e retornar o professor a partir do `id` fornecido na rota. Faça a busca pelo professor a partir do `id` e atualize no arquivo `json` os dados que foram alterados (utilize o constructor `Number` para formatar o id como número). Por fim, redirecione para a página de apresentação dos dados de um professor (show).

### DELETE

Crie um botão na página de apresentação dos dados do professor. Esse botão irá chamar uma rota para deletar o professor do arquivo `json`. Lembre de sobrescrever o método POST do form para DELETE (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `delete` e gere um array com todos os professores, exceto o que deve ser removido (`filter`). Por fim, redirecione para a página de listagem dos professores.

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio. Porém algumas coisas são obrigatórias:

- O botão de deletar deve ficar ao lado do botão de editar;
- O botão de deletar deve ser da cor vermelha.