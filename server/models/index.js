const bd = require('../bd/index.js');

module.exports = {
  addItem: function(item, quantity) {
    bd.addTobd(item, quantity);
  }
}