const fs = require('fs')
const data = require('./data.json')
const { age, date, grad, mode } = require('./utils')

exports.index = (req, res) => {
  const teachers = data.teachers.map(teacher => {
    return teacher = {
      ...teacher,
      services: teacher.services.split(',')
    }
  })

  return res.render('teachers/index', { teachers })
}

exports.new = (req, res) => {
  return res.render('teachers/new')
}

exports.post = (req, res) => {
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

exports.show = (req, res) => {
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

exports.edit = (req, res) => {
  const { id } = req.params
  const foundTeacher = data.teachers.find(function(teacher) {
    return id == teacher.id
  })

  if (!foundTeacher) return res.send('Professor(a) não encontrado(a)')

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso
  }

  return res.render('teachers/edit', { teacher })
}

exports.update = (req, res) => {
  const { id } = req.body
  let index = 0

  const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundTeacher) return res.send('Professor(a) não encontrado(a)')

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.teachers[index] = teacher

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro ao gravar arquivo')

    return res.redirect(`teachers/${id}`)
  })
}

exports.delete = (req, res) => {
  const { id } = req.body

  data.teachers = data.teachers.filter(function(teacher) {
    return teacher.id != id
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro ao gravar arquivo')

    return res.redirect(`teachers/`)
  })
}