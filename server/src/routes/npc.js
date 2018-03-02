import { getUserNPCs } from '../nodeQuery';
import { Router } from 'express';

let router = Router();

router.get('/:id', (req, res) => {
    getUserNPCs(req.params.id)
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
});

export default router;