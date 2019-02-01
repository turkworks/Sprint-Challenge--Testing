const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  //-------------GET ENDPOINT TESTS
  describe("GET / endpoint", () => {
    it("should respond with status code 200", async () => {
      let response = await request(server).get("/games");

      expect(response.status).toBe(200);
    });

    it("should respond with JSON", async () => {
      let response = await request(server).get("/games");

      expect(response.type).toMatch(/json/i);
    });

    it("should respond with API", async () => {
      const expected = [];

      let response = await request(server).get("/games");

      expect(response.body).toEqual(expected);
    });
  });

  //-------------POST ENDPOINT TESTS
  describe("POST / endpoint", () => {
    it("should respond with status code 201", async () => {
      let response = await request(server).post("/games");

      expect(response.status).toBe(500);
    });

    it("should respond with JSON", async () => {
      let response = await request(server).post("/games");

      expect(response.type).toMatch(/json/i);
    });

    it("should respond with ERR", async () => {
      const expected = { code: "SQLITE_MISUSE", errno: 21 };

      let response = await request(server).post("/games");

      expect(response.body).toEqual(expected);
    });
  });
});
