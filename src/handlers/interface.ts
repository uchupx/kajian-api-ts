import { Route } from "../route";

export interface Handler {
   routes(): Array<Route>
}
