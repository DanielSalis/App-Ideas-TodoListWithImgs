require('dotenv').config();
const { Pool } = require('pg');

// ==> Conexão com a Base de Dados:
const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
    query: async (text, params) => await pool.query(text, params),
};