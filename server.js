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

const express = require('express')
const app = express()
 
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port, () =>{
	console.log('De server draait op port ' + port)
})