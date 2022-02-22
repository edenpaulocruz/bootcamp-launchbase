<h1 align="center">
    <img alt="LaunchBase Bootcamp" src="../assets/launchbase-bootcamp-logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 3-3: Página de descrição do curso
</h3>

## Sobre o desafio

Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

### Rota

A rota também será a `/courses`, porém o id do curso será passado via route params (ex.: `/courses/id_do_curso`). Dica: utilize o req.params para recuperar o id fornecido na rota.

```js
server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`);
});
```

### Informações

* Layout padrão
* Card do curso
* Linke que redireciona para a página do curso

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.