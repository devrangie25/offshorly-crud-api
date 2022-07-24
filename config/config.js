require('dotenv').config();

module.exports = {
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '3306',
    DB_NAME: process.env.DB_NAME || 'todo_db',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    PORT: process.env.PORT || '3000'
}