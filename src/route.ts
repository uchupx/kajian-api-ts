import { Request, Response } from "express"
import HttpStatusCode from "./helper/enums/http"
import { successResponse } from "./helper/reqres"
import { log } from "./helper/logger"
import { EventHandler } from "./handlers/event"

export enum RouteMethod {
  Get = 'get',
  Post= 'post',
  Put =  'put'
}

export type Route = {
  method: RouteMethod,
  path: string,
  func(req: Request, res: Response): any
}

export function InitRoute(app: any) {
  const routes = [{
    method: RouteMethod.Get,
    path: "/ping",
    func: (req: Request, res: Response): any => {
      res.status(HttpStatusCode.OK).send(successResponse("pong !!!"))
    }
  }] as Array<Route>


  log.info(`Initialize route`)

  routes.push(...(new EventHandler().routes()))
  routes.forEach(r => {
    app[r.method](r.path, r.func)
    log.info(`${r.method}: ${r.path} -> ${r.func.name}`)
  })
}

