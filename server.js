var express = require('express')

var PORT = 3000
var app = express()

app.get('/', function(req, res) {
  res.send("Welcome to the index!")
})

app.listen(3000, function(req, res) {
  console.log('The server is listening on port', PORT)
})
