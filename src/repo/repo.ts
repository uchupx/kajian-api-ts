import { Database } from "../database/mysql";

export class Repo {
  private conn?: Database;
  protected tableName: string;
  
  constructor(database: Database) {
    console.log(database.test())
    this.conn = database;
  }

  protected insertQ(): string {
    return `INSERT INTO ${this.tableName} ({fields}) VALUES ?`;
  }

  protected updateQ(): string {
    return `UPDATE ${this.tableName} SET {fields} WHERE {where}`;
  }

  protected selectQ(): string {
    return `SELECT {fields} FROM ${this.tableName} {where}`;
  }

  protected hardDelQ(): string {
    return `DELETE ${this.tableName} WHERE {where}`;
  }
}
