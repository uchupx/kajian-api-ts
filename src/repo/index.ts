import { EventRepo } from "./event"
import { Database } from "../database/mysql"
import { Repo } from "./repo"



export const repos = (database: Database): {[key: string]: Repo}=> {
  return {
    event: (new EventRepo(database))
  }
}
