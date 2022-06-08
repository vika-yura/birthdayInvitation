const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'user',
  password: '',
  host: 'localhost',
  port: '5432',
  database: 'wishlist'
});


module.exports = pool;
