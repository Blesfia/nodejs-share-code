const { createSandbox, assert } = require('sinon');
const environment = require('../environment');
const roomController = require('./room.controller');
const createRoomTask = require('../tasks/create-room.task');

describe('RoomController', () => {
  let res;
  let req;
  let sandbox;

  beforeEach(() => {
    environment.PORT = 3000;
    sandbox = createSandbox();
    res = {
      status: sandbox.stub().callsFake(() => res),
      location: sandbox.stub().callsFake(() => res),
      json: sandbox.stub().callsFake(() => res),
    };
    req ={
      protocol: 'http',
      hostname: 'localhost',
      originalUrl: '/originalUrl'
    }
  });

  describe('create', () => {
    let createRoomTaskExecute;
    beforeEach(() => {
      createRoomTaskExecute = sandbox.stub(createRoomTask, 'execute').returns({ id: 'id' });
    });

    it('should return 201 with location and response expected', async () => {
      await roomController.create(req, res);
      
      assert.called(createRoomTaskExecute);
      assert.calledWith(res.status, 201);
      assert.calledWith(res.location, 'http://localhost:3000/originalUrl/id');
      assert.calledWith(res.json, { id: 'id' });
    });
  });

  afterEach(() => {
    sandbox.restore();
  })
});