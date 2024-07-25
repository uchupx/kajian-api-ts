import express, { Request, Response } from 'express'
import { InitRoute } from './route'
import { log } from './helper/logger'
import App from './helper/app'
import { Database } from './database/mysql'

const app = express()
const config = App.getConfig;
const port = config.app.port || 8011


app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Hello ini berhasil')
})


InitRoute(app, config)

app.listen(port, () => {
  log.info(`Server running at http://localhost:${port}`)
})
