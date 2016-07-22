var express = require('express')
var routes = require('./routes')

var PORT = 3000
var app = express()
var testVar = 'cat'


app.get('/', routes.index)

app.get('/paramstest/:id', routes.paramsTest)

app.get('/savetolocal', routes.saveIdToLocal)

app.listen(3000, function(req, res) {
  console.log('The server is listening on port', PORT)
})
