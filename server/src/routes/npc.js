import { getUserNPCs } from '../nodeQuery';
import { Router } from 'express';
import Table from '../table';

let npcTable = new Table('npc');

let router = Router();

router.get('/:id', (req, res) => {
    getUserNPCs(req.params.id)
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
});

router.post('/:id', (req, res) => {
    npcTable.insert(req.body)
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
})

router.put('/:id', (req, res) => {
    npcTable.update(req.body.id, req.body)
    .then((results) => {
        res.send(results)
    }).catch((err) => (
        console.log(err)
    ))
})

router.delete('/:id', (req, res) => {
    npcTable.delete(req.body.id)
    .then((results) => {
        res.send(results)
    }).catch((err) => (
        console.log(err)
    ))
})


export default router;