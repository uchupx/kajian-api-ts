import { Database } from "../database/mysql";
import { SpeakerModel } from "./models/speaker";
import { Repo } from "./repo";

export class SpeakerRepo extends Repo {
  constructor(database: Database) {
    super(database);

    this.tableName = "speakers"
  }

  public async findById(id: string): Promise<SpeakerModel | null> {
    let result: SpeakerModel | null = null;

    return null
  }
}
