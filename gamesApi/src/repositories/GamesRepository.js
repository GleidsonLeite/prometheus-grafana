const Game = require("../entities/Game")

class GamesRepository {
  constructor() {
    this.games = []
  }

  /**
   * @returns {Game[]}
   */
  list() {
    return this.games
  }

  /**
   * @param {Object} parameters 
   * @param {String} parameters.id
   * @param {String} parameters.name
   * @param {Number} parameters.price
   */
  create(parameters) {
    const { id, name, price } = parameters
    const createdGame = new Game({
      id,
      name,
      price
    })
    this.games.push(createdGame)
  }
}

module.exports = GamesRepository