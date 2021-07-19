const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/grocerybd', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected ... ');
});

const grocery = new mongoose.Schema({
  item: String,
  quantity: Number
});

const Grocery = mongoose.model('Grocery', grocery);

/*
const element = new Grocery({
  item: 'Orange',
  quantity: 5
});

//element.save();
*/
module.exports = {
  addTobd: function(item, quantity) {
    const element = new Grocery({
      item: item,
      quantity: quantity
    });
    element.save();
  },
}


