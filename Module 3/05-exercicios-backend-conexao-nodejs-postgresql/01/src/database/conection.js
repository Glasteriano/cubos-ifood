const { Pool } = require('pg');
const database = require('./ignoreFile');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: database.password,
    database: 'library'
});

module.exports = {
    pool
};