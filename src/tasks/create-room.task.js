const roomRepository = require("../repositories/room.repository")


function execute() {
    return roomRepository.create();
}

module.exports = {
    execute
}

