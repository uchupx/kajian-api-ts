import { Database } from "../database/mysql";
import { EventModel } from "./models/event";
import { Repo } from "./repo";

export class EventRepo extends Repo {
  constructor(database: Database) {
    super(database);
    // define table name
    this.tableName = "events"
  }

  public async find(): Promise<Array<EventModel>> {
    let result: Array<EventModel> = [];
    let q = this.selectQ();
    q = q.replace(Repo.fieldsEnums, "*");
    q = q.replace(Repo.whereEnums, "WHERE");

    await this.conn?.execute("SELECT * FROM events").then((rows) => {
      for (const idx in rows) {
        result.push(new EventModel(rows[idx]));
      }
      return result;
    }).catch((err) => {
      throw err;
    });

    return result;
  }
}
