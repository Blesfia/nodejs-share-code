const request = require("supertest");
const app = require("../src");

describe("Application", () => {
  it("should return 200 in healthcheck", () => {
    return request(app)
      .get("/healthcheck")
      .expect(200);
  });
});
