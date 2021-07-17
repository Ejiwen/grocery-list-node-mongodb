const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   console.log("Hello from server");
//   res.end();
// })
app.use(express.static('public'));

app.listen(3000, () => console.log("SERVER IS LISTENING NOW ... !!!"));