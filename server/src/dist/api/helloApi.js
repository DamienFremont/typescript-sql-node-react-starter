"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
function helloApi() {
    const api = express_1.Router();
    api.get('/', (req, res) => {
        const body = {
            express: 'Hello From Express from TS'
        };
        res.json(body);
    });
    return api;
}
exports.helloApi = helloApi;
//# sourceMappingURL=helloApi.js.map