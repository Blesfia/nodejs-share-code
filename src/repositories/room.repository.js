const cuid = require('cuid');

const memory = {};

async function create() {
    const newObject = { id: cuid() };
    memory[newObject.id] = newObject
    return newObject;
}
async function findOneById(id) {
    return memory[id];
}

module.exports = {
    create,
    findOneById
}