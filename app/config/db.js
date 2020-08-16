'user strict';
const config = require('./config');
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: config.hostDB,
    user: config.userDB,
    password: config.passDB,
    database: config.nameDB
});

connection.connect(function(err) 
{
    if (err)
    {
        return false;
    }
    else
    {
        return true;
    }
});

module.exports = connection;