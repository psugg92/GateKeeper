import Table from '../table';
import { Router } from 'express';

let router = Router();

let worlds = new Table('worlds')

router.get('/', (req, res) => {
    worlds.getAll()
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
});

export default router;