import { Repo } from "./repo";

export class EventRepo extends Repo {
  static readonly tableName = "events"

  static readonly insertQ = `INSERT INTO ${this.tableName} ({fields}) VALUES ? ;`
  static readonly selectQ = `SELECT {fields} FROM ${this.tableName} {where};`
  static readonly updateQ = `UPDATE ${this.tableName} SET {fields} WHERE {where};`
  static readonly hardDelQ = `DELETE ${this.tableName} WHERE {where};`
}
