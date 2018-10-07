import * as bodyParser from 'body-parser';
import { Router } from 'express';

import { helloApi } from './helloApi';

export function api() {
    const router = Router();

    router.use(bodyParser.json());

    // perhaps expose some API metadata at the root
    router.use('/hello', helloApi());

    return router;
}