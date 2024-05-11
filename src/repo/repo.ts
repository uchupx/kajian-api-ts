import { Database } from "../database/mysql";

export class Repo {
  protected conn?: Database;
  protected tableName: string;

  protected static fieldsEnums = '{fields}';
  protected static whereEnums = '{where}';

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
