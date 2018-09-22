const express = require('express');
const path = require('path');
const fs = require('fs');
const winston = require('winston');
var os = require( 'os' );

overrideEnvIfDev();
const logger = createLogger();

startApp((START_DURATION) => {
  logEnv();
  const app = createExpress();
  initAPI(app);
  startExpress(app, () => {
    if (process.env.NODE_ENV === 'production') {
      serveClientBuild();
    }
  }, (port) => {
    console.timeEnd(START_DURATION);
  });
});

/* IMPL ******************************************************** */

function logEnv() {
  logger.log('info', 'Starting Application');
  if (process.pid) {
    logger.log('info', 'This process is your PID ' + process.pid);
  }
  if (process.env.NODE_ENV !== 'production') {
    logger.log('warn', 'mode = \'developpment\' (process.env.NODE_ENV not set to \'production\')');
  }
  logger.log('info', 'env var LOGGER_LEVEL = ' + logger.level);
  logger.log('info', 'env var NODE_ENV = ' + process.env.NODE_ENV);
  logger.log('info', 'env var CONTACT_MAIL = ' + process.env.CONTACT_MAIL);
}

function initAPI(app) {
  logger.log('info', 'Initializing API');
  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  logger.log('debug', 'Mapped URL path [/api/hello]');
  logger.log('info', 'Initiated API');
}

/* UTILS ******************************************************** */

function createExpress() {
  logger.log('info', 'Starting Express');
  const app = express();
  return app;
}

function startApp(callback) {
  const START_DURATION = 'Started Application in seconds';
  console.time(START_DURATION);
  fs.readFile('banner.txt', 'utf8', function (err, data) {
    console.log(data);
    const version = require('./package.json').version;
    console.log(' :: NodeJS ::          (v' + version + ')');
    console.log(' ');
    callback(START_DURATION);
  });
}

function startExpress(app, productionCallback, callback) {
  const port = process.env.PORT || 5000;
  productionCallback();
  app.listen(port, () => {
    logger.log('info', `Express started on port(s):  ${port}`);
    var networkInterfaces = os.networkInterfaces( );
    logger.log('info', 'You can now view application.');
    logger.log('info', ' ');
    logger.log('info', `  Local:            http://127.0.0.1:${port}`);
    logger.log('info', `                    http://127.0.0.1:${port}/index.html`);
    logger.log('info', `                    http://127.0.0.1:${port}/api/`);
    logger.log('info', `  On your network:  http://${networkInterfaces.Ethernet[1].address}:${port}`);
    logger.log('info', ' ');
    callback(port);
  });
}

function serveClientBuild() {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  logger.log('info', 'Mapped index.html to ./client/build folder');
};

function overrideEnvIfDev() {
  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    console.log('warn: Loaded Env file over Node process.env');
  }
}

function createLogger() {
  const level = process.env.LOGGER_LEVEL || 'info';
  const logger = winston.createLogger({
    level: level,
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }
  return logger;
}