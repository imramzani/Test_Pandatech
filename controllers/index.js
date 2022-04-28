const axios = require("axios");
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const qs = require("qs");
const auth_token = Buffer.from(
  `${client_id}:${client_secret}`,
  "utf-8"
).toString("base64");

class Controller {
  static async getAuth(req, res) {
    try {
      const base_url = "https://accounts.spotify.com/api/token";
      const data = qs.stringify({ grant_type: "client_credentials" });

      const response = await axios.post(base_url, data, {
        headers: {
          Authorization: `Basic ${auth_token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      let client_token = response.data.access_token;
      return client_token;
    } catch (error) {
      console.log(error);
    }
  }

  static async getSongs(req, res) {
    try {
      const input = req.params.input;
      if (!input) {
        throw new Error({
          status: 404,
          code: "No input",
        });
      }
      const access_token = await Controller.getAuth();
      const api_url = `https://api.spotify.com/v1/search?q=name%3A${input}&type=track%2Cplaylist&limit=10&offset=5`;
      const response = await axios.get(api_url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      let status = error.status || 500;
      res.status(status).json({
        msg: error.code,
      });
    }
  }
}

module.exports = Controller;
