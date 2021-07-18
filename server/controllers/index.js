const models = require('../models');

module.exports = {
  addItem: function(req, res) {
    const {item} = req.body;
    const {quantity} = req.body;
    models.addItem(item, quantity);
  }
}