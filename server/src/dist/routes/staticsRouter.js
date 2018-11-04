"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
function staticsRouter(root) {
    const router = express_1.Router();
    const publicPath = path.join(__dirname, root, 'build');
    router.all('/*', (req, res, next) => {
        // logger.log('info', 'Reading the main route through http request, sending index.html');
        res.sendFile(path.join(publicPath, 'index.html'));
    });
    return router;
}
exports.staticsRouter = staticsRouter;
//# sourceMappingURL=staticsRouter.js.map