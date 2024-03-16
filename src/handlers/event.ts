import { Route, RouteMethod } from "../route"
import { Handler } from "./interface"
import { Request, Response } from "express"
import HttpStatusCode from "../helper/enums/http"
import { successResponse } from "../helper/reqres"
import { EventService } from "../services/event"

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
        func: this.create 
      }
    ] as Array<Route>
  }

  create(req: Request, res: Response):any {
    res.status(HttpStatusCode.CREATED).json(successResponse("created"))
  } 
}
