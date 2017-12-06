var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '995876786',
    database : 'project',
    dateStrings:'DATE'
});

connection.connect();
module.exports=connection;