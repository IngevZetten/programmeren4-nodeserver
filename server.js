//
// server.js
//
// let http = require('http');

// const port = process.env.PORT || 3000;

// http.createServer(function (request, response){
// 	console.log('Er was een request');
// 	response.writeHead(200, {'Content-Type': 'application/json'});
// 	let result = {
// 		firstname: 'Robin',
// 		lastname: "Schellius"
// 	};
// 	response.write(JSON.stringify(result));
// 	response.end();
// }).listen(port);

// console.log('De server luistert op port ' + port);
//imports
const express = require('express')
const morgan = require('morgan')
//om class Person te gebruiken in deze file
const Person = require('./domain/Person')
const bodyparser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyparser.json())

let personlist = []

//reageert op alle binnenkomende requests
app.use('*', (req, res, next) => {
  console.log('We received a request')
  next()
})



//wanneer de gevraagde endpoint niet gevonden is komen we hier.
//functies get en post zijn niet aangeroepen
app.use('*', (req, res, next) => {
  console.log('We received a request')
  const error = {
    error: 'Endpoint does not exist'
  }
  res.status(404).json(error).end()
})

//Als er een next(info) werd aangeroepen komen we hier.
app.use((err,req,res,next) => {
  console.log('Final error handler: an error occured')
  console.log(err)
  const error = {
    error: 'Server error'
  }
  res.status(500).json(error).end()
})
 
app.listen(port, () =>{
	console.log('De server draait op port ' + port)
})

