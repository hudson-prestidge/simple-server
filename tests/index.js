var test = require('tape')
var routes = require('../routes')

test('routes.saveIdToLocal stores an id query in locals', function(t) {
  var req = {
    query: {
      id: 3
    },
    app: {
      locals: {
        id: 0
      }
    }
  }

  routes.saveIdToLocal(req, null)
  t.equals(req.app.locals.id, 3)
  t.end()
})

test('routes.index responds with index.html', function(t) {
  var res = { sendFile: sendFile }

  routes.index(null, res)

  function sendFile (file) {
    t.equals(file, '/Users/apprentice/kereru/simple-server/index.html')
    t.end()
  }
})
