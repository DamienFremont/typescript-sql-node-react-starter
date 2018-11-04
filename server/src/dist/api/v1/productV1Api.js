"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
function productV1Api() {
    const api = express_1.Router();
    api.get('/', (req, res) => {
        db_1.default.Product.findAll().then(result => {
            res.json(result);
        });
    });
    return api;
}
exports.productV1Api = productV1Api;
//# sourceMappingURL=productV1Api.js.map