import { Repo } from "../repo/repo"
import { EventService } from "./event"
import { Service } from "./service"

export const services = (repos:{[key: string]: Repo}): {[key: string]: Service} => {
  return {
    event: (new EventService(repos.event))
  }
}
