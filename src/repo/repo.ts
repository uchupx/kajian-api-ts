import { Database } from "../database/mysql";

export class Repo {
  private conn?: Database;

  constructor(database: Database) {
    console.log(database.test())
    this.conn = database;
  }
}
