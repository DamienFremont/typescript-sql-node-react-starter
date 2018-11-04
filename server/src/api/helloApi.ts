import { Router } from 'express';

import HelloResponse from '../../../common/src/model/HelloModel';

export function helloApi(): Router {
    const api = Router();

    api.get('/', (req, res) => {
        const body = {
            express: 'Hello From Express from TS'
        } as HelloResponse;
        res.json(body);
    });

    return api;
}