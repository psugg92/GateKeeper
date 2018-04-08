import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';
import {generateHash} from '../utils/security'

let router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, response, info) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!response) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(response);
        }
    })(req, res, next);
});

export default router;