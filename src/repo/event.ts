import { Database } from "../database/mysql";
import { EventModel } from "./models/event";
import { Repo } from "./repo";

export class EventRepo extends Repo {
  constructor(database: Database) {
    super(database);
    // define table name
    this.tableName = "events"
  }

  public async create(event: EventModel): Promise<EventModel> {
    let q = this.insertQ();
    q = q.replace(Repo.fieldsEnums, "id, speaker_id, name, description, detail_address, date_event, start_event, end_event, created_at, status")
    q = q.replace(Repo.valuesEnums, "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")

    let args = [this.id(), event.speaker_id, event.name, event.description, event.detail_address, event.date_event, event.start_event, event.end_event, event.created_at, event.status]

    await this.conn?.execute(q, args).then((rows) => {
      return event;
    }).catch((err) => {
      throw err;
    });

    return event;
  }

  public async find(): Promise<Array<EventModel>> {
    let result: Array<EventModel> = [];
    let q = this.selectQ().replace(Repo.fieldsEnums, "*").replace(Repo.whereEnums, "WHERE");

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
