import * as bodyParser from 'body-parser';
import * as express from 'express';
import { api, apiDocs } from './api/api';
import { staticsRouter } from './routes/staticsRouter';

// import * as logger from 'morgan';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  private root = '../../../';

  // Run configuration methods on the Express instance. 
  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    // this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    if (process.env.NODE_ENV === 'production') {
      this.express.use(staticsRouter(this.root));
    }
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    const router = express.Router();
    // placeholder route handler

    // api router
    router.use('/api', api());
    router.use('/api-docs', apiDocs());

    this.express.use('/', router);
  }

}

export default new App().express;