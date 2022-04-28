const app = require("../app");
const request = require("supertest");
const { getAuth } = require("../controllers");

describe(`GET Songs by input from Spotify API`, () => {
  describe(`GET songs/English success`, () => {
    it(`should return an object with status 200`, async () => {
      const res = await request(app).get("/songs/English");
      console.log(res);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("tracks");
      expect(res.body).toHaveProperty("playlists");
    });
  });
  describe(`GET songs/English failed no access token`, () => {
    it(`should return an object with status 404`, async () => {
      const res = await request(app).get("/songs");
      console.log(res);
      expect(res.status).toBe(404);
    });
  });
});
