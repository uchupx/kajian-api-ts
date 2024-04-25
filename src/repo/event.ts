import { Database } from "../database/mysql";
import { EventModel } from "./models/event";
import { Repo } from "./repo";

export class EventRepo extends Repo {
  constructor(database: Database) {
    super(database);
    // define table name
    this.tableName = "events"
  }

  public find(): Array<EventModel> {
    let q = this.selectQ()

    console.log(q);
    
    return [];
  }
}
