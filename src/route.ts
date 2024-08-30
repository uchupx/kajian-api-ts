import { Request, Response } from "express"
import HttpStatusCode from "./helper/enums/http"
import { successResponse } from "./helper/reqres"
import { Config } from "./helper/app"
import { log } from "./helper/logger"
import { repos } from "./repo"
import { services } from "./services"
import { handlers } from "./handlers"
import { Database } from "./database/mysql"

export enum RouteMethod {
  Get = 'get',
  Post = 'post',
  Put = 'put'
}

export type Route = {
  method: RouteMethod,
  path: string,
  func(req: Request, res: Response): any
}

export function InitRoute(app: any, config: Config) {
  const routes = [
    {
      method: RouteMethod.Get,
      path: "/version",
      func: (req: Request, res: Response): any => {
        res.status(HttpStatusCode.OK).send(config.app.version)
      }
    },
    {
      method: RouteMethod.Get,
      path: "/ping",
      func: (req: Request, res: Response): any => {
        res.status(HttpStatusCode.OK).send(successResponse("pong !!!"))
      }
    }
  ] as Array<Route>

  const conn = new Database({
    user: config.database.username,
    host: config.database.host,
    database: config.database.database,
    port: config.database.port,
    password: config.database.password,
  })

  const repo = repos(conn)
  const service = services(repo)
  const handler = handlers(service)
  for (const idx in handler) {
    routes.push(...handler[idx].routes())
  }

  log.info(`Initialize route`)

  routes.forEach(r => {
    app[r.method](r.path, r.func)
    log.info(`Route : ${r.method.toUpperCase()}: ${r.path} -> ${r.func.name.replace('bound ', '')}`)
  })
}


