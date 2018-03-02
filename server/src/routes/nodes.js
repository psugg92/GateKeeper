import { Router } from 'express';
import {getSingleNode} from '../nodeQuery';
import Table from '../table';

let nodeTable = new Table('nodes');

let router = Router();

router.get('/', (req, res) => {
    nodeTable.getAll()
    .then(results => {
        res.json(results)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500);
    })
})

router.get('/:id', (req,res) => {
    getSingleNode(req.params.id)
    .then(results => {
        res.json(results)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)    
    })
})

// router.post('/', (req, res) => {
//     nodeTable.insert()
// })


export default router;