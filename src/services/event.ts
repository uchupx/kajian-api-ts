import { EventRepo } from "../repo/event";
import { RepoInterface } from "../repo/repo";
import { Service } from "./service";
import { EventPayload } from "../types/request/event";
import { DefQuery } from "../types/request";
import { EventModel } from "../repo/models/event";
export class EventService implements Service {
  private eventRepo: EventRepo

  constructor(eventRepo: EventRepo | RepoInterface) {
    this.eventRepo = eventRepo as EventRepo
  }

  public async createEvent(payload: EventPayload): Promise<any> {
    return await this.eventRepo.create((new EventModel(payload)))
  }

  public async updateEvent(id: string, payload: EventPayload): Promise<any> {
    return await this.eventRepo.update((new EventModel(payload)))
  }

  public async findEvent(query: DefQuery): Promise<any> {
    return await this.eventRepo.find()
  }

  public async findByIdEvent(id: string): Promise<any> {
    return await this.eventRepo.findById(id)
  }
}
