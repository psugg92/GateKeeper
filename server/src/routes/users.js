import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import { getSingleUser } from '../nodeQuery';

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});

router.get('/:id', (req, res) => {
    getSingleUser(req.params.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
    })
})

export default router;