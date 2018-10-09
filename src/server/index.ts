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

  db.Product.create({ id: '1', name: 'Un', type: 'FOOD', price: 42.00 });
  db.Product.create({ id: '2', name: 'Deux', type: 'FOOD', price: 42.00 });
  db.Product.create({ id: '3', name: 'Trois', type: 'TOY', price: 42.00 });
  
  // express
  const server = http.createServer(App);

  // serve
  server.listen(port, () => {
    logger.logEnd();
    logger.logHostname(port);
  })

})();