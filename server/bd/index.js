var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ONEDAYBEFORE'
});

connection.connect();

// connection.query(`INSERT INTO testtable(name) VALUES('amadou')`, function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

module.exports = {connection}