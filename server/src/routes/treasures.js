import { getTreasure, postTreasure } from "../nodeQuery";
import { Router } from "express";
import Table from "../table";

let router = Router();

router.post('/', (req, res) => {
    postTreasure(req.body.treasureName, req.body.treasureValue, req.body.treasureDescription)
    .then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
})

router.get('/', (req, res) => {
    getTreasure()
    .then(data => {
        res.json(data);
    }).catch(err => (
        console.log(err)
    ))
})

export default router;