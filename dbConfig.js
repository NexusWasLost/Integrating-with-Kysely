import { Kysely, SqliteDialect } from "kysely";
import Database from "better-sqlite3";
import { config } from "dotenv";
config();

const db_path = process.env.db_path;

export const db = new Kysely({
  dialect: new SqliteDialect({
    database: new Database(db_path)
  }),
  log: ['query', 'error']  // optional
});
