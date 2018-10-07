import { Router } from 'express';

import IHelloResponse from '../../shared/api/HelloModel';

export function helloApi(): Router {
    const api = Router();

    api.get('/', (req, res) => {
        const body = {
            express: 'Hello From Express from TS'
        } as IHelloResponse;
        res.json(body);
    });

    return api;
}