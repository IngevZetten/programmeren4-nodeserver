
let personlist = []
const person = require('../domain/Person')

module.exports = {

    getAllPersons: (req, res, next) => {
        console.log('get was called')
        res.status(200).json(personlist).end()
      },

    getPersonById: (req, res, next) => {
        console.log('get was called')
        const id = req.params.id
      
        if(id >=0 && id < personlist.length){
        //als id geldig is in de personlist: stuur persoon terug
        res.status(200).json(personlist[id]).end()
        }else{
          //als id niet geldig is: error
          const error = {
            error: 'Id does not exist (index out of bounds)'
          }
          next(error)
        }
      },

      createPerson: (req, res, next) => {
        console.log('post was called')
        console.log(req.body)
      
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const person = new Person(firstname, lastname)
        personlist.push(person)
      
        res.status(200).json(person).end()
      },

      deletePersonById: (req, res, next) => {
          console.log('delete was called')
          const id = req.params.id
        
          if(id >= 0){
          personlist.splice(id,1)
          }

          res.status(200).end()
      }
        
}

//CRUD functions

