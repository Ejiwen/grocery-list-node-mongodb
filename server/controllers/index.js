const models = require('../models');

module.exports = {
  addItem: function(req, res) {
    const {item} = req.body;
    console.log(item);
    //models.addItem();
  }
}