const mysql = require('mysql');
const CONFIG = require('../config/config');

const settings = {
    host: CONFIG.DB_HOST,
    user: CONFIG.DB_USER,
    password: CONFIG.DB_PASSWORD,
    database: CONFIG.DB_NAME,
    dateStrings: true
};

const dbConnect = mysql.createConnection(settings);

dbConnect.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConnect;