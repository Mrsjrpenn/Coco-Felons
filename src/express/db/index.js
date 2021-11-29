// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'change-this-name'
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${ DB_NAME }`;
const client = new Client({
  connectionString: DB_URL
});

// database methods

// export
module.exports = {
  client,
  // db methods
}