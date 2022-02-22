<h1 align="center">
    <img alt="LaunchBase Bootcamp" src="../assets/launchbase-bootcamp-logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 2-3: Página de posts e iframe
</h3>

## Sobre o desafio

A partir do arquivo do desafio 2.2, adicionar no header um link chamado Conteúdos. Essa página deve conter um grid onde devem ser mostrados os seus 3 posts favoritos do Blog da Rocketseat ([Blog](https://blog.rocketseat.com.br/)). Ao clicar em um dos posts, deve ser aberta uma modal onde um iframe irá carregar as informações do post selecionado.

### Informações da página

- Título da página

- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos posts

### Informações do card

- Imagem de destaque do Post ([Tutorial de como pegar os links das imagens](https://youtu.be/f4aS9ZULm4A))

- Título do Post

- Autor do Post

- Tempo de Leitura

### Modal

O modal deve conter um iframe que busca a página do post (dica: basta adicionar o Slug - versão padronizada do título - ao final de `https://blog.rocketseat.com.br/`, por exemplo, `axios-um-cliente-http-full-stack`. Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o `modalOverlay`, mas trabalhe com a classe `modal` e utilize o método `contains` do `classList` para verificar se o elemento está ou não com a classe `maximize`.

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- Deve ser utilizado o grid para organizar os posts

- O modal nunca deve abrir maximizado