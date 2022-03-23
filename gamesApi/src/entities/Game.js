class Game {
  /**
   * @param {Object} parameters 
   * @param {String} parameters.id
   * @param {String} parameters.name
   * @param {Number} parameters.price
   */
  constructor(parameters) {
    const { id, name, price } = parameters;
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

module.exports = Game