const { expect } = require("chai");
const createRoomTask = require("./create-room.task");
const roomRepository = require("../repositories/room.repository");
const { assert, createSandbox } = require("sinon");

describe('CreateRoomTask', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = createSandbox();
  });

    describe('execute', () => {
        it('should call the create repository and return the result', async () => {
            const roomRepositoryCreate = sandbox.stub(roomRepository, 'create').returns(Promise.resolve({ id: 'id' }));
            
            const response = await createRoomTask.execute();
            
            assert.called(roomRepositoryCreate);
            expect(response).to.deep.equals({ id: 'id' });
        });
    });


  afterEach(() => {
    sandbox.restore();
  })
});