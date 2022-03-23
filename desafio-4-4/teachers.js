const fs = require('fs')
const data = require('./data.json')
const { age, grad, mode } = require('./utils')

exports.index = function(req, res) {
  return res.render('teachers/index')
}

exports.new = function(req, res) {
  return res.render('teachers/new')
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '')
      return res.send('Todos os campos são obrigatórios')
  }

  birth = Date.parse(req.body.birth)
  const created_at = Date.now()
  let id = 1
  const lastTeacher = data.teachers[data.teachers.length - 1]
  if (lastTeacher) id = lastTeacher.id + 1

  data.teachers.push({
    id,
    ...req.body,
    birth,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro ao gravar arquivo')
  })

  return res.redirect(`teachers/${id}`)
}

exports.show = function(req, res) {
  const { id } = req.params
  const foundTeacher = data.teachers.find(function(teacher) {
    return id == teacher.id
  })

  if (!foundTeacher) return res.send('Professor(a) não encontrado(a)')

  const teacher = {
    ...foundTeacher,
    birth: age(foundTeacher.birth),
    graduation: grad(foundTeacher.graduation),
    class: mode(foundTeacher.class),
    services: foundTeacher.services.split(','),
    created_at: new Date(foundTeacher.created_at).toLocaleDateString()
  }

  return res.render('teachers/show', { teacher })
}
