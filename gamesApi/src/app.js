const express = require('express');

const GamesRepository = require('./repositories/GamesRepository');
const CreateGameService = require('./services/CreateGameService');

const app = express();
app.use(express.json());

const port = 3333

const gamesRepository = new GamesRepository()
const createGameService = new CreateGameService(gamesRepository)

app.post("/", (req, res) => {
  const { name, price } = req.body
  createGameService.execute(name, price)

  res.status(201).send()
})

app.get('/metrics', (req, res) => {
  return res.send(`# HELP created_games it refers to the number created games\n# TYPE created_games gauge\ncreated_games ${gamesRepository.list().length}`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})