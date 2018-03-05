import { Router } from 'express';
import {getSingleNode, getCampaignNodes} from '../nodeQuery';
import Table from '../table';

let nodeTable = new Table('nodes');

let router = Router();

router.get('/', (req, res) => {
    getCampaignNodes(req.params.id)
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

router.post('/', (req, res) => {
    nodeTable.insert(req.body)
    .then(data =>{
        res.send(data);
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.put('/', (req, res) => {
    nodeTable.update(req.body.id, req.body)
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err)
    })
})

export default router;