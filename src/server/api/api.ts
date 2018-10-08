import * as bodyParser from 'body-parser';
import { Router } from 'express';

import { helloApi } from './helloApi';
import { productApi } from './productApi';
import { productV1Api } from './v1/productV1Api';
import { productV2Api } from './v2/productV2Api';

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