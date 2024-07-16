const Pool = require('pg').Pool
const pool = new Pool({
  user: 'roli',
  host: 'localhost',
  database: 'recipe_app',
  password: 'root',
  port: 5432,
});