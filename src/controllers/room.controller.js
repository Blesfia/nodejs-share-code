const { buildLocation } = require('../constants')

function create (req, res) {
  const location = buildLocation(req)

  res.status(201).location(`${location}/newId`).json({ id: 'newId' })
}

module.exports = {
  create
}
