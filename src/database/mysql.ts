import mysql, { ConnectionOptions } from 'mysql2';
import {log} from '../helper/logger'


const access: ConnectionOptions = {
  user: 'root',
  database: 'kajian',
  host: 'localhost',
  port: 3306
};

const conn = mysql.createConnection(access);

conn.ping((err) => {
  if (!err) {
    log.error("failed to ping connection")
    process.exit(0)
  }
})

export const connection = conn

