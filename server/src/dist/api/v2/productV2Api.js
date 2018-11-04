"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
function productV2Api() {
    const api = express_1.Router();
    api.get('/', (req, res) => {
        db_1.default.Product.findAll().then(result => {
            res.json(result);
        });
    });
    return api;
}
exports.productV2Api = productV2Api;
//# sourceMappingURL=productV2Api.js.map