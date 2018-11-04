import { Router } from 'express';
import { FindOptions, UpdateOptions } from 'sequelize';

import ProductAttributes, { FindAllParams, FindAllResponse, PageResponse, ProductItem } from '../../../common/src/model/ProductModel';
import db from '../db';

export function productApi(): Router {
    const api = Router();

    const DEF_LIMIT = 100;

    api.get('/', (req, res) => {
        const query = req.query as FindAllParams;
        const options = {
            offset: ((query.page && query.size) ? ((query.page - 1) * query.size) : 0),
            limit: (query.size ? query.size : DEF_LIMIT)
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
        db.Product.findById(req.params.id).then((result) => {
            res.json(result);
        });
    });

    api.post('/', (req, res) => {
        db.Product.create(req.body).then((result: ProductAttributes) => {
            res.json(result);
        });
    });

    api.put('/:id', (req, res) => {
        db.Product.update(req.body, {
            where: {
                id: req.params.id
            }
        } as UpdateOptions).then((result: any[]) => {
            res.json({
                affectedRows: result[0]
            });
        });
    });

    return api;
}