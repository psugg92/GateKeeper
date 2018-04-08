import { insertToNodeRef } from "../nodeQuery";
import { Router } from "express";

let router = Router();

router.post('/', (req, res) => {
    insertToNodeRef(req.body.node_id, req.body.trap_id, req.body.treasure_id, req.body.npc_id)
    .then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err)
    })
})

// router.post('/', (req, res) => {
//     postTrap(req.body.trapName, req.body.trapType, req.body.trapSpotDC, req.body.trapDisarmDC, req.body.trapDescription, req.body.trapDamage)
//     .then(data => {
//         res.json(data);
//     }).catch(err => {
//         console.log(err);
//     })
// })

// router.get('/', (req, res) => {
//     getTraps()
//     .then(data => {
//         res.json(data);
//     }).catch(err => (
//         console.log(err)
//     ))
// })

export default router;
