const formDelete = document.querySelector('[data-js="form-delete"]')

formDelete.addEventListener('submit', event => {
  const confirmation = confirm('Deseja deletar?')
  if (!confirmation) event.preventDefault()
})
