var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nodeapp',
    insecureAuth: true
});

connection.connect();

module.exports = connection;