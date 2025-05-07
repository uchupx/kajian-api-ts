import { Request, Response, NextFunction } from "express"
import Redis from "../database/redis"
import App from "../helper/app"

const key = 'auth:token:'
const authorization = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    let token = req.headers.authorization

    const re = new RegExp("Bearer (.*)")
    const match = re.exec(token)

    if (match && match[1]) {
        token = match[1]
    }

    const isExist = await (new Redis({url: App.getConfig.redis.url})).get(key + token);

    if (!isExist) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    next()
}


export default authorization
