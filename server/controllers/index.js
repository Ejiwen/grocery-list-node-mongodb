const models = require('../models');
//const bd = require('./bd/index.js');

module.exports = {
  addItem: function(req, res) {
    const {item} = req.body;
    const {quantity} = req.body;
    models.addItem(item, quantity);
  }
}