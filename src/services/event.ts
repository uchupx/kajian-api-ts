import { EventRepo } from "../repo/event";
import { Service } from "./service";
import { EventPayload } from "../types/request/event";
import { DefQuery } from "../types/request";
import { EventModel } from "../repo/models/event";
export class EventService implements Service {
  private eventRepo: EventRepo

  constructor(eventRepo: EventRepo) {
    this.eventRepo = eventRepo
  }

  public async createEvent(payload: EventPayload): Promise<any> {
    return await this.eventRepo.create((new EventModel(payload)))
  }

  public async findEvent(query: DefQuery): Promise<any> {
    return await this.eventRepo.find()
  }
}
