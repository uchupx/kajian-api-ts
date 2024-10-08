import { Request } from "express";
import { Route } from "../route";

export interface Handler {
  routes(): Array<Route>
}

export function BindRequest<T>(req: Request): T {
  return req.body as T
}

export function BindQuery<T>(req: Request): T {
  return req.query as T
}
