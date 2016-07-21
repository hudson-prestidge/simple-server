var express = require('express')

var PORT = 3000
var app = express()

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/querytest/:id', function(req, res) {
  console.log(req.url)
  console.log(req.params)
  res.send(req.params.id)
})

app.get('/savetolocal', function(req, res) {
   console.log(req.app.locals);
   req.app.locals.adds = 10 + 2
   console.log(req.app.locals);
})

app.listen(3000, function(req, res) {
  console.log('The server is listening on port', PORT)
})
