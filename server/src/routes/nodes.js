import { Router } from 'express';
import {getSingleNode, getCampaignNodes, postNode, getLastMadeNodeId} from '../nodeQuery';
import Table from '../table';

let nodeTable = new Table('nodes');
let nodeRefTable = new Table('node_ref');

let router = Router();

router.get('/', (req, res) => {
    getLastMadeNodeId()
    .then(results => {
        res.json(results)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)    
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
    .then(data => {
        res.send(data);
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.delete('/', (req, res) => {
    nodeTable.delete(req.body.id)
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err)
    })
})

export default router;