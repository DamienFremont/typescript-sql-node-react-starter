"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http = require("http");
const App_1 = require("./App");
const LoggerHelper_1 = require("./helpers/LoggerHelper");
const EnvUtils_1 = require("./utils/EnvUtils");
const db_1 = require("./db");
/**
 * Main script for server
 */
// env
EnvUtils_1.default.initOrOverride();
const port = (process.env.PORT || 5000);
// logger
const logger = new LoggerHelper_1.default();
logger.logStart();
logger.logBanner('config/banner.txt', process.env.REACT_APP_VERSION);
logger.logEnv();
(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // database
    yield db_1.default.sequelize.sync({ force: true });
    for (let index = 1; index < 40; index++) {
        db_1.default.Product.create({
            id: index.toString(),
            name: `Un${index}`,
            type: `FOOD`,
            price: (42 + index)
        });
    }
    // express
    const server = http.createServer(App_1.default);
    // serve
    server.listen(port, () => {
        logger.logEnd();
        logger.logHostname(port);
    });
}))();
//# sourceMappingURL=index.js.map