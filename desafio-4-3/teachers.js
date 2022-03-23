exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '')
      return res.send('Todos os campos são obrigatórios')
  }

  return res.send(req.body)
}
