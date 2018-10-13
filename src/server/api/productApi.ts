import { Router } from 'express';

import { ProductItem } from '../../shared/api/ProductModel';
import db from '../db';
import { FindOptions } from 'sequelize';

export function productApi(): Router {
    const api = Router();

    const defaultLimit = 100;

    api.get('/', (req, res) => {
        const page = req.query.page;
        const size = req.query.size;
        const options = {
            offset: (page ? ((req.query.page - 1) * req.query.size) : 0),
            limit: (size ? req.query.size : defaultLimit)
        } as FindOptions<ProductItem>;
        db.Product
            .findAll(options)
            .then((result: ProductItem[]) => {
                res.json(result);
            });
    });

    api.get('/:id', (req, res) => {
        db.Product
            .findById(req.params.id)
            .then((result) => {
                res.json(result);
            });
    });

    api.post('/', (req, res) => {
        db.Product
            .create(req.body)
            .then(() => res
                .redirect('/'))
    });

    api.put('/:id', (req, res) => {
        db.Product
            .update(req.body)
            .then(() => res
                .redirect('/'))
    });

    return api;
}