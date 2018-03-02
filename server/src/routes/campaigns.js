// import Table from '../table';
import { Router } from 'express';
import { getUserCampaigns } from '../nodeQuery';

let router = Router();

// let campaigns = new Table('campaigns')

router.get('/:id', (req, res) => {
    getUserCampaigns(req.params.id)
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
});

export default router;