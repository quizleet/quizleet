import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
