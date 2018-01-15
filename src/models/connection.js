const MYSQL = require('mysql');

module.exports = () => {
    let pool = MYSQL.createPool({
        connectionLimit: 100,
        waitForConnections: true,
        host: '<hostname>',
        user: '<user>',
        password: '<password>',
        database: '<database_name'
    });
    return pool;
}