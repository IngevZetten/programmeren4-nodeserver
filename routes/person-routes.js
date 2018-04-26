//
// Person routes
//

const express = require('express')
const Personcontroller = require('../controllers/person-controller')
let routes = express.Router()

//api routes
//lijst met personen
  routes.get('/person', Personcontroller.getAllPersons)
  //1 persoon op id teruggeven
  routes.get('/person/:id', Personcontroller.getPersonById)
  
  routes.post('/person', Personcontroller.createPerson)
  routes.delete('/person/:id', Personcontroller.deletePersonById)

  module.exports = routes