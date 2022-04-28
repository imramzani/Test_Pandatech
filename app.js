require("dotenv").config();
const express = require("express");
const app = express();
const { getSongs } = require("./controllers");

app.use(express.json());

app.get("/songs/:input", getSongs);

module.exports = app;
