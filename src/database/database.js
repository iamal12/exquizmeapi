const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'maverick',
    password: 'mavericK@123$',
    database: 'hello'
});

mysqlConnection.connect(function(error) {
    if (error) {
        console.log(error);
        return error;
    } else {
        console.log('Database is connected ..!!')
    }
});

module.exports = mysqlConnection;