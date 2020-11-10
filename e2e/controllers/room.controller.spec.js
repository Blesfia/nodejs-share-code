const request = require("supertest");
require("../../src");

describe("RoomController", () => {
    // Messages are important
    describe('POST /api/v1/rooms', () => {
        it("should create the room", () => {
          return request('http://localhost:3000')
            .post("/api/v1/rooms")
            .expect(201)
            // Explain restful specification
            .expect('Location', 'http://localhost:3000/api/v1/rooms/newId')
            .expect({
                id: 'newId',
            });
        });
    });
});
