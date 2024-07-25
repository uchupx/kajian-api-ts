type ServiceConfig = {
  host: string;
  port?: number;
}

export type Config = {
  database: {
    username: string;
    password: string;
    host: string;
    port: number;
    database: string;
  },
  app: {
    port: number;
    env: 'development' | 'production';
  }
  service: {
    user: ServiceConfig;
  }
}

const projectPath: string = __dirname + '/../../'

function getConfig(): Config {
  let fs = require('fs')

  console.log(projectPath + '/.env.json')
  return JSON.parse(fs.readFileSync(projectPath + '/.env.json', 'utf8')) as Config
}

export default {
  getConfig: getConfig(),
  path: projectPath,
  env: getConfig().app.env
}

