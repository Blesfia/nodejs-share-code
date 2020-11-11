const { expect } = require("chai");
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
            .expect('Location', new RegExp('http://localhost:3000/api/v1/rooms/c.{24}'))
            .then(response => {
                expect(response.body.id).to.match(/c.{24}/);
            });
        });
    });
});
