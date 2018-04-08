import { Router } from 'express';
import { getSingleCampaign } from '../nodeQuery';

let router = Router();

router.get('/:id', (req, res) => {
    getSingleCampaign(req.params.id)
    .then(results => {
        res.json(results)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500);
    })
})


export default router;