import * as bodyParser from 'body-parser';
import { Router } from 'express';

import { helloApi } from './helloApi';
import { productApi } from './productApi';

export function api() {
    const router = Router();

    router.use(bodyParser.json());

    // perhaps expose some API metadata at the root
    router.use('/hello', helloApi());
    router.use('/products', productApi());

    return router;
}