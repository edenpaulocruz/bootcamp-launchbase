const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res) {
  return res.redirect('/teachers')
})

routes.get('/teachers', teachers.index)
routes.get('/teachers/new', teachers.new)
routes.post('/teachers', teachers.post)
routes.get('/teachers/:id', teachers.show)
routes.get('/teachers/:id/edit', teachers.edit)
routes.put('/teachers', teachers.update)
routes.delete('/teachers', teachers.delete)

routes.get('/students', function(req, res) {
  return res.render('students/index')
})

module.exports = routes
