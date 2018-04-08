import { getUserNPCs, postNPC, insertNPCNodeRef } from "../nodeQuery";
import { Router } from "express";
import Table from "../table";


let npcTable = new Table("npc");

let router = Router();

router.get("/:id", (req, res) => {
  getUserNPCs(req.params.id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  postNPC(
    req.body.npcName,
    req.body.npcSize,
    req.body.npcAlignment,
    req.body.npcArmor,
    req.body.npcHitPoints,
    req.body.npcSpeed,
    req.body.npcFlySpeed,
    req.body.npcClimbSpeed,
    req.body.npcStrength,
    req.body.npcDexterity,
    req.body.npcConstitution,
    req.body.npcIntelligence,
    req.body.npcWisdom,
    req.body.npcCharisma,
    req.body.npcStStrength,
    req.body.npcStDexterity,
    req.body.npcStConstitution,
    req.body.npcStIntelligence,
    req.body.npcStWisdom,
    req.body.npcStCharisma,
    req.body.npcSkills,
    req.body.npcDamageImmunity,
    req.body.npcConditionImmunity,
    req.body.npcSenses,
    req.body.npcPassivePerception,
    req.body.npcChallengeRating,
    req.body.npcExperienceReward,
    req.body.npcDescription,
    req.body.npcActions,
    req.body.npcLegendaryActions,
    req.body.npcLairActions
  )
    .then(results => {
      res.json(results)
      console.log(results);
    })
    .catch(err => console.log(err));
});

router.post('/insert', (req, res) => {
  insertNPCNodeRef(req.params.id, req.body.id)
  .then(data => {
      res.json(data);
  }).catch(err => {
      console.log(err)
  })
})



// need to re-do so that 'user_id' does not have to be entered
// use new route

// router.post('/:id', (req, res) => {
//     npcTable.insert(req.body)
//     .then((results) => (
//         res.json(results)
//     )).catch((err) => (
//         console.log(err)
//     ))
// })

// router.put('/:id', (req, res) => {
//     npcTable.update(req.body.id, req.body)
//     .then((results) => {
//         res.send(results)
//     }).catch((err) => (
//         console.log(err)
//     ))
// })

// router.delete('/:id', (req, res) => {
//     npcTable.delete(req.body.id)
//     .then((results) => {
//         res.send(results)
//     }).catch((err) => (
//         console.log(err)
//     ))
// })

export default router;
