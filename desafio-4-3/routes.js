const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res) {
  return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res) {
  return res.render('teachers/index')
})

routes.get('/teachers/new', function(req, res) {
  return res.render('teachers/new')
})

routes.post('/teachers', teachers.post)

routes.get('/students', function(req, res) {
  return res.render('students/index')
})

module.exports = routes
