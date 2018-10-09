import * as bodyParser from 'body-parser';
import { Router } from 'express';

import { helloApi } from './helloApi';
import { productApi } from './productApi';
import { productV1Api } from './v1/productV1Api';
import { productV2Api } from './v2/productV2Api';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument2 = require('../../../config/api-v2.swagger.json');

export function api() {
    const router = Router();

    router.use(bodyParser.json());

    // perhaps expose some API metadata at the root
    router.use('/hello', helloApi());
    router.use('/products', productApi());

    // public
    router.use('/v1/products', productV1Api());
    router.use('/v2/products', productV2Api());

    return router;
}

export function apiDocs() {
    const router = Router();
    router.use(bodyParser.json());

    // doc @see http://editor.swagger.io/
    router.use('/', swaggerUi.serve);
    router.get('/', swaggerUi.setup(swaggerDocument2));

    return router;
}