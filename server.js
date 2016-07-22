var express = require('express')
var routes = require('./routes')

var PORT = 3000
var app = express()
var testVar = 'cat'


app.get('/', routes.index)

app.get('/querytest/:id', function(req, res) {
  res.send(req.params.id)
})

app.get('/savetolocal', routes.storeId)

app.listen(3000, function(req, res) {
  console.log('The server is listening on port', PORT)
})
