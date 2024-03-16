import mysql, { ConnectionOptions, Connection } from 'mysql2';
import {log} from '../helper/logger'

export class Database {
  public connection : Connection

  constructor(conf: ConnectionOptions) {
    this.connection = mysql.createConnection(conf);

    this.connection.ping(err => {
      if (err) {
        log.error("failed to ping db")
        process.exit(0)
      }
    })
  }

  public test() {
    log.info("test ping connection")
    this.connection.ping(err => {
      if (err) {
        log.error("test ping failed")
      } else {
        log.info("test ping success")
      }
    })

    log.info("test dummy query")
    this.connection.execute("SHOW TABLES", (err, result) => {
      if (err) {
        log.error("test query failed: " + err.message)
      } else {
        log.info("test query success: ")
        log.info(result)
      }
    })

    log.info("test done")
  }

  public execute(query: string, args?: Array<any>): any {
    this.connection.prepare(query, (err, stmt) => {
      if (err) {
        log.error("failed to prepare statement with query : " + query)
        return false
      }
    })

    return false
  }
}

