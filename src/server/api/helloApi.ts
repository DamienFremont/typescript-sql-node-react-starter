import * as bodyParser from 'body-parser';
import { Router } from 'express';
import IHelloDTO from '../../shared/model/IHelloDTO';

export function helloApi() {
    const router = Router();
    router.use(bodyParser.json());

    router.get('/api/hello', (req, res) => {
        const body = { express: 'Hello From Express' } as IHelloDTO;
        res.send(body);
    });

    return router;
}