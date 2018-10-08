import { Router } from 'express';

import db from '../db';

export function productApi(): Router {
    const api = Router();

    api.get('/', (req, res) => {
        db.Product.findAll().then(result => {
            res.json(result);
        });
    });

    return api;
}