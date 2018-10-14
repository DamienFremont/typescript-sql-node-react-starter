import { Router } from 'express';

import { ProductItem, FindAllResponse, FindParams, PageResponse } from '../../shared/api/ProductModel';
import db from '../db';
import { FindOptions } from 'sequelize';

export function productApi(): Router {
    const api = Router();

    const defaultLimit = 100;

    api.get('/', (req, res) => {
        const query = req.query as FindParams;
        const options = {
            offset: ((query.page && query.size) ? ((query.page - 1) * query.size) : 0),
            limit: (query.size ? query.size : defaultLimit)
        } as FindOptions<ProductItem>;
        Promise.all([
            db.Product.count(),
            db.Product.findAll(options)
        ]).then((values) => {
            const count = values[0] as number;
            const result = values[1] as ProductItem[];
            res.json({
                products: result,
                page: ((query.page && query.size) ? {
                    size: query.size,
                    totalElements: count,
                    totalPages: (count / query.size),
                    number: query.page
                } as PageResponse : null)
            } as FindAllResponse);
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