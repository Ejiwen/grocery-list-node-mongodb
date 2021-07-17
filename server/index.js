const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/item', controllers.addItem);

app.listen(3000, () => console.log("SERVER IS LISTENING NOW ... !!!"));