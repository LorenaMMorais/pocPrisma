import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const connectionDb = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default connectionDb;