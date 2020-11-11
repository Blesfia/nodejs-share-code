const { buildLocation } = require('../constants')
const createRoomTask = require('../tasks/create-room.task')

async function create (req, res) {
  const location = buildLocation(req)

  const { id } = await createRoomTask.execute();
  res.status(201).location(`${location}/${id}`).json({ id })
}

module.exports = {
  create
}
