module.exports = {
  index: index,
  saveIdToLocal: saveIdToLocal
}


function index(req, res) {
  res.sendFile(__dirname + '/index.html')
}

function saveIdToLocal (req, res) {
  req.app.locals.id = req.query.id
}

function paramsTest (req, res) {
  res.send(req.params.id)
}
