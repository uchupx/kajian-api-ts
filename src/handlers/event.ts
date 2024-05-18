import { Route, RouteMethod } from "../route"
import { Handler, BindRequest } from "./interface"
import { Request, Response } from "express"
import HttpStatusCode from "../helper/enums/http"
import { successResponse } from "../helper/reqres"
import { EventService } from "../services/event"
import { EventPayload } from "../types/request/event"

export class EventHandler implements Handler {
  static readonly path = "/events"

  private eventSvc: EventService

  constructor(eventSvc: EventService) {
    this.eventSvc = eventSvc
  }

  routes(): Array<Route> {
    return [
      {
        method: RouteMethod.Post,
        path: EventHandler.path,
        func: (req: Request, res: Response) => {
          return this.create(req, res)
        }
      },
      {
        method: RouteMethod.Get,
        path: EventHandler.path,
        func: (req: Request, res: Response) => {
          return this.find(req, res)
        }
      }
    ] as Array<Route>
  }

  public create(req: Request, res: Response): any {
    const payload = BindRequest<EventPayload>(req)

    res.status(HttpStatusCode.CREATED).json(successResponse(payload))
  }

  public async find(req: Request, res: Response) {
    const r = await this.eventSvc.findEvent()
    res.status(HttpStatusCode.OK).json(successResponse(r))
  }
}
