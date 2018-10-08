import * as http from 'http';

import App from './App';
import LoggerHelper from './helpers/LoggerHelper';
import EnvUtils from './utils/EnvUtils';
import db from "./db";

/**
 * Main script for server
 */

// env
EnvUtils.initOrOverride();
const port = (process.env.PORT || 5000) as number;

// logger
const logger = new LoggerHelper();
logger.logStart();
logger.logBanner();
logger.logEnv();

(async () => {

  // database
  await db.sequelize.sync({ force: true });
  
  // express
  const server = http.createServer(App);

  // serve
  server.listen(port, () => {
    logger.logEnd();
    logger.logHostname(port);
  })

})();