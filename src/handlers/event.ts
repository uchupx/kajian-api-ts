import { Route, RouteMethod } from "../route"
import { Handler, BindRequest, BindQuery } from "./interface"
import { Request, Response } from "express"
import HttpStatusCode from "../helper/enums/http"
import { successResponse } from "../helper/reqres"
import { EventService } from "../services/event"
import { EventPayload, EventSchema } from "../types/request/event"
import { DefQuery } from "../types/request"
import { validate } from "./validator"

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
    const [err, payload] = validate<EventPayload>(EventSchema, req.body)
    if (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }

    try {
      const r = this.eventSvc.createEvent(payload)
      res.status(HttpStatusCode.CREATED).json(successResponse(r))
    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(e)
    }
  }

  public async find(req: Request, res: Response) {
    const query = BindQuery<DefQuery>(req)

    try {
      const r = await this.eventSvc.findEvent(query)
      res.status(HttpStatusCode.OK).json(successResponse(r))
    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(e)
    }
  }
}
