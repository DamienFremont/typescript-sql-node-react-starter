"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express_1 = require("express");
const helloApi_1 = require("./helloApi");
const productApi_1 = require("./productApi");
const productV1Api_1 = require("./v1/productV1Api");
const productV2Api_1 = require("./v2/productV2Api");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument2 = require('../../../config/api-v2.swagger.json');
function api() {
    const router = express_1.Router();
    router.use(bodyParser.json());
    // perhaps expose some API metadata at the root
    router.use('/hello', helloApi_1.helloApi());
    router.use('/products', productApi_1.productApi());
    // public
    router.use('/v1/products', productV1Api_1.productV1Api());
    router.use('/v2/products', productV2Api_1.productV2Api());
    return router;
}
exports.api = api;
function apiDocs() {
    const router = express_1.Router();
    router.use(bodyParser.json());
    // doc @see http://editor.swagger.io/
    router.use('/', swaggerUi.serve);
    router.get('/', swaggerUi.setup(swaggerDocument2));
    return router;
}
exports.apiDocs = apiDocs;
//# sourceMappingURL=api.js.map