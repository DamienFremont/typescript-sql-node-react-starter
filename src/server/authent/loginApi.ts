import * as bodyParser from 'body-parser';
import { Router } from 'express';
import { Authenticator } from 'passport';

export function loginApi(passport: Authenticator) {
    const router = Router();
    router.use(bodyParser.json());

    /* TODO: remove me
    router.get('/login', (req, res) => {
        res.render('login');
    });
    */
   
    router.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        (req, res) => {
            res.redirect('/');
        });

    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    return router;
}