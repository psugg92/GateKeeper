import { postTrap, getTraps } from "../nodeQuery";
import { Router } from "express";
import Table from "../table";

let router = Router();

router.post('/', (req, res) => {
    postTrap(req.body.trapName, req.body.trapType, req.body.trapSpotDC, req.body.trapDisarmDC, req.body.trapDescription, req.body.trapDamage)
    .then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
})

router.get('/', (req, res) => {
    getTraps()
    .then(data => {
        res.json(data);
    }).catch(err => (
        console.log(err)
    ))
})

export default router;
