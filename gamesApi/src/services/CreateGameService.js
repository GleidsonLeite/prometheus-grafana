const { v4: uuid } = require("uuid")
const GamesRepository = require("../repositories/GamesRepository");

class CreateGameService {
  /**
   * 
   * @param {GamesRepository} gamesRepository 
   */
  constructor(gamesRepository) {
    this.gamesRepository = gamesRepository;
  }

  /**
   * @param {Object} parameters
   * @param {String} parameters.name
   * @param {Number} parameters.price
   */
  execute(parameters) {
    const { name, price } = parameters;
    this.gamesRepository.create({
      id: uuid(),
      name,
      price,
    })
  }
}

module.exports = CreateGameService;