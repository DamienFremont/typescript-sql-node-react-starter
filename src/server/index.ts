import * as express from 'express';
import * as http from 'http';
import * as os from 'os';
import * as passport from 'passport';
import * as path from 'path';

import { LocalStrategy, loginApi } from './authent';
import { helloApi } from './api/helloApi';
import { staticsRouter } from './routes/staticsRouter';
import { createLogger, logBanner, overrideEnv } from './utils';

/**
 * Main script for server
 */

const START_DURATION = 'Started Application in seconds';
console.time(START_DURATION);

const app = express()
const port = process.env.PORT || 5000;
const base = '../../';

passport.use(LocalStrategy.create());
passport.serializeUser(LocalStrategy.serializeUser);
passport.deserializeUser(LocalStrategy.deserializeUser);

logBanner();
overrideEnv();
const logger = createLogger();
logEnv();

app.set('port', port)
app.use(express.static(path.join(__dirname, base, 'build')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(passport.initialize());
app.use(passport.session());
app.use(loginApi(passport as any));

app.use(helloApi());

app.use(staticsRouter());

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  logHostname();
})

console.timeEnd(START_DURATION);



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

function logHostname() {
  const p = app.get('port');
  logger.log('info', `Express started on port(s):  ${p}`);
  const networkInterfaces = os.networkInterfaces();
  logger.log('info', 'You can now view application.');
  logger.log('info', ' ');
  logger.log('info', `  Local:            http://127.0.0.1:${p}`);
  logger.log('info', `                    http://127.0.0.1:${p}/index.html`);
  logger.log('info', `                    http://127.0.0.1:${p}/api/`);
  logger.log('info', `  On your network:  http://${networkInterfaces.Ethernet[1].address}:${p}`);
  logger.log('info', ' ');
}