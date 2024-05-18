import express, { Request, Response } from 'express'
import { InitRoute } from './route'
import { log } from './helper/logger'
import { Database } from './database/mysql'

const app = express()
const port = process.env.PORT || 8011


app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Hello ini berhasil')
})

InitRoute(app)

app.listen(port, () => {
  log.info(`Server running at http://localhost:${port}`)
})
