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
        func: this.create.bind(this),
      },
      {
        method: RouteMethod.Get,
        path: EventHandler.path,
        func: this.find.bind(this),
      },
      {
        method: RouteMethod.Get,
        path: EventHandler.path + "/:id",
        func: this.findById.bind(this),
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

  public update(req: Request, res: Response): any {
    const [err, payload] = validate<EventPayload>(EventSchema, req.body)
    const { id } = req.params

    if (err) {
      return res.status(HttpStatusCode.BAD_REQUEST).json(err)
    }

    try {
      const r = this.eventSvc.updateEvent(id, payload)

      res.status(HttpStatusCode.OK).json(successResponse(r))
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

  public async findById(req: Request, res: Response) {
    const { id } = req.params

    try {
      const r = await this.eventSvc.findByIdEvent(id)
      if (!r) {
        return res.status(HttpStatusCode.NOT_FOUND).json({ message: "event not found" })
      }
      res.status(HttpStatusCode.OK).json(successResponse(r))
    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(e)
    }
  }
}
