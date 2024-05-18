import { EventRepo } from "../repo/event";
import { Service } from "./service";
import { EventPayload } from "../types/request/event";
export class EventService implements Service {
  private eventRepo: EventRepo

  constructor(eventRepo: EventRepo) {
    this.eventRepo = eventRepo
  }

  public createEvent(payload: EventPayload): any {
    return payload
  }

  public async findEvent(): Promise<any> {
    return await this.eventRepo.find()
  }
}
