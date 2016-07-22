module.exports = {
  index: index,
  storeId: storeId
}


function index(req, res) {
  res.sendFile(__dirname + '/index.html')
}

function storeId (req, res) {
  req.app.locals.id = req.query.id
}
