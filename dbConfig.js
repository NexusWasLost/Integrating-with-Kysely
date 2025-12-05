import { Kysely, SqliteDialect } from "kysely";
import Database from "better-sqlite3";

export const db = new Kysely({
  dialect: new SqliteDialect({
    database: new Database("C:/Users/nexus/Desktop/code/sql/gameShop.db")
  }),
  log: ['query', 'error']  // optional
});
