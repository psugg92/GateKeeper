import Table from '../table';
import { Router } from 'express';
import { getUserCampaigns, getCampaignNodes, postUserCampaign, getCampaignLocations, postCampaignLocation } from '../nodeQuery';

let router = Router();

let campaigns = new Table('campaigns')

router.get('/nodes/:id', (req, res) => {
    getCampaignNodes(req.params.id)
    .then(results => {
        res.json(results)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500);
    })
})

router.get('/:id', (req, res) => {
    getUserCampaigns(req.params.id)
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
});

// router.post('/:id', (req, res) => {
//     campaigns.insert(req.body)
//     .then(data =>{
//         res.send(data);
//     }).catch((err) => (
//         console.log(err)
//     ))
// })

router.post('/:id', (req, res) => {
    postUserCampaign(req.body.campaignName, req.body.campaignDescription, req.params.id)
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
})

router.put('/:id', (req, res) => {
    campaigns.update(req.params.id, req.body)
    .then(data =>{
        res.send(data);
    }).catch((err) => (
        console.log(err)
    ))
})

router.delete('/:id', (req, res) => {
    campaigns.delete(req.params.id)
    .then((data) => {
        res.send(data);
    }).catch((err) =>(
        console.log(err)
    ))
})

router.get('/locations/:id', (req, res) => {
    getCampaignLocations(req.params.id)
    .then((results) => (
        res.json(results)
    )).catch((err) => (
        console.log(err)
    ))
});

router.post(`/locations/:id`, (req, res) => {
    postCampaignLocation(req.body.locationName, req.body.locationDescription, req.body.locationLore, req.params.id)
    .then((results) => {
        res.json(results)
    }).catch((err) => (
        console.log(err)
    ))
})

export default router;