import { Router } from 'express';
import * as path from 'path';

export function staticsRouter(root: string) {
  const router = Router();
  const publicPath = path.join(__dirname, root, 'build');
  router.all('/*', (req, res, next) => {
    // logger.log('info', 'Reading the main route through http request, sending index.html');
    res.sendFile(path.join(publicPath, 'index.html'))
  })
  return router;
}