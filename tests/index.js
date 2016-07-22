var test = require('tape')
var routes = require('../routes')

test('can save variables into locals on the server', function(t) {
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

  routes.storeId(req, null)
  t.equals(req.app.locals.id, 3)
  t.end()
})
