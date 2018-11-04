"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
function productApi() {
    const api = express_1.Router();
    const DEF_LIMIT = 100;
    api.get('/', (req, res) => {
        const query = req.query;
        const options = {
            offset: ((query.page && query.size) ? ((query.page - 1) * query.size) : 0),
            limit: (query.size ? query.size : DEF_LIMIT)
        };
        Promise.all([
            db_1.default.Product.count(),
            db_1.default.Product.findAll(options)
        ]).then((values) => {
            const count = values[0];
            const result = values[1];
            res.json({
                products: result,
                page: ((query.page && query.size) ? {
                    size: query.size,
                    totalElements: count,
                    totalPages: (count / query.size),
                    number: query.page
                } : null)
            });
        });
    });
    api.get('/:id', (req, res) => {
        db_1.default.Product.findById(req.params.id).then((result) => {
            res.json(result);
        });
    });
    api.post('/', (req, res) => {
        db_1.default.Product.create(req.body).then((result) => {
            res.json(result);
        });
    });
    api.put('/:id', (req, res) => {
        db_1.default.Product.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.json({
                affectedRows: result[0]
            });
        });
    });
    return api;
}
exports.productApi = productApi;
//# sourceMappingURL=productApi.js.map