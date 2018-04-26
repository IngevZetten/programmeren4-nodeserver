//
// Person routes
//
//api routes
//lijst met personen
app.get('/api/all', (req, res, next) => {
    console.log('get was called')
    res.status(200).json(personlist).end()
  })
  
  //1 persoon op id teruggeven
  app.get('/api/person/:id', (req, res, next) => {
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
  })
  
  app.post('/api/person', (req, res, next) => {
    console.log('post was called')
    console.log(req.body)
  
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const person = new Person(firstname, lastname)
    personlist.push(person)
  
    res.status(200).json(person).end()
  })