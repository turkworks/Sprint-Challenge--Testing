const express = require("express");
const server = express();
const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

server.get("/games", async (req, res) => {
  const games = await db("games").select("title", "genre", "releaseYear");

  res.status(200).json(games);
});

// server.post("/games", (req, res) => {
//   //   const { title, genre, releaseYear } = req.body;
//   db.insert(req.body)
//     .into("games")
//     .then(game => {
//       res.status(201).json(game);
//     })
//     .catch(err => res.status(500).json(err));
// });

server.post("/games", (req, res) => {
  const game = req.body;

  db.insert(game)
    .into("games")
    .then(title => {
      res.status(201).json(title);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;
