import { EventRepo } from "../repo/event";
import { Service } from "./service";

export class EventService implements Service {
  private eventRepo: EventRepo

  constructor(eventRepo: EventRepo) {
    this.eventRepo = eventRepo
  }

  public createEvent(): any {
    return
  }

  public async findEvent(): Promise<any> {
    return await this.eventRepo.find()
  }
}
