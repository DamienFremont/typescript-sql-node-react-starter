import * as path from 'path';
// import * as express from 'express';
import { Router } from 'express';

const base = '../../';

export function staticsRouter() {
  const router = Router();
  const publicPath = path.join(__dirname, base, 'build');
  router.all('/*', (req, res, next) => {
    // logger.log('info', 'Reading the main route through http request, sending index.html');
    res.sendFile(path.join(publicPath, 'index.html'))
  })
  return router;
}


