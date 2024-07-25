import mysql, { ConnectionOptions, Connection } from 'mysql2';
import { log } from '../helper/logger'

export class Database {
  public connection: Connection
  private _debug: boolean = false

  constructor(conf: ConnectionOptions) {
    this.connection = mysql.createConnection(conf);

    this._debug = conf.debug ? conf.debug : false

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

  public execute(query: string, args?: Array<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this._debug) {
        log.info("query: " + query)

        if (args) {
          log.info("args: " + args)
        }
      }

      this.connection.execute(query, args, (err, result) => {
        if (err) {
          log.error("query failed: " + err.message)
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  public begin(callback: Function): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.beginTransaction(err => {
        if (err) {
          log.error("begin transaction failed: " + err.message)
          reject(err)
        } else {
          callback(resolve, reject)
        }
      })
    })
  }

  public slowQuery(query: string, args?: Array<any>) {
  }
}

