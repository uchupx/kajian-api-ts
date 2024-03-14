import path from "path"
import { Route, RouteMethod } from "../route"
import { Handler } from "./interface"
import { Request, Response } from "express"
import HttpStatusCode from "../helper/enums/http"
import { successResponse } from "../helper/reqres"

export class EventHandler implements Handler {
  static readonly path = "/events"

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
    const test = 0

    res.status(HttpStatusCode.CREATED).json(successResponse("created"))
    
  } 
}
