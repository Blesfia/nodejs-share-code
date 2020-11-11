const { expect } = require("chai");
const { createSandbox } = require("sinon");
const roomRepository = require("./room.repository");

describe("RoomRepository", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = createSandbox();
  });

  describe("create", () => {
    it("should create the room into the DB and return the object created", async () => {
      const roomCreated = await roomRepository.create();
      const room = await roomRepository.findOneById(roomCreated.id);

      expect(roomCreated).to.deep.equal(room);
    });
  });

  afterEach(() => {
    sandbox.restore();
  });
});
