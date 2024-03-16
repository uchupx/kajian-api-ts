import { EventHandler } from "./event"
import { Handler } from "./interface";



export const handlers = (services: {[key: string]: any}): {[key: string]: Handler} => {
  return {
    event: (new EventHandler(services.event))
  }
} 
