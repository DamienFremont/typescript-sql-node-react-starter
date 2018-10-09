import { Router } from 'express';

import { ProductItem } from '../../shared/api/ProductModel';
import db from '../db';

export function productApi(): Router {
    const api = Router();

    api.get('/', (req, res) => {
        db.Product.findAll()
            .then((result: ProductItem[]) => {
                res.json(result);
            });
    });

    api.get('/:id', (req, res) => {
        db.Product.findById(req.params.id)
            .then((result) => {
                res.json(result);
            });
    });

    api.post('/', (req, res) => {
        db.Product.create(req.body)
            .then(() => res.redirect('/'))
    });

    api.put('/:id', (req, res) => {
        db.Product.update(req.body)
            .then(() => res.redirect('/'))
    });

    return api;
}