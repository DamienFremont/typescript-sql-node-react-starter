"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const api_1 = require("./api/api");
const staticsRouter_1 = require("./routes/staticsRouter");
// import * as logger from 'morgan';
// Creates and configures an ExpressJS web server.
class App {
    // Run configuration methods on the Express instance. 
    constructor() {
        this.root = '../../../';
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        // this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        if (process.env.NODE_ENV === 'production') {
            this.express.use(staticsRouter_1.staticsRouter(this.root));
        }
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        const router = express.Router();
        // placeholder route handler
        // api router
        router.use('/api', api_1.api());
        router.use('/api-docs', api_1.apiDocs());
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map