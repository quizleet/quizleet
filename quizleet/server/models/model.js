import pg from "pg";
const { Pool } = pg;

import dotenv from "dotenv";
dotenv.config();

// Read your URI from the .env filenpds
const PG_URI = process.env.PG_URI;
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};


