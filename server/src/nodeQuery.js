import {executeQuery} from "./config/db";

export function getSingleNode(id) {
    let sql = 
        `select n.node_name, n.node_description, l.location_name, l.location_description, t.*, tr.*, npc.*
        from node_ref nr
          left join nodes n on n.id = nr.node_id
          left join locations l on l.id = n.location_id
          left join traps t on t.id = nr.trap_id
          left join treasure tr on tr.id = nr.treasure_id
          left join npc on npc.id = nr.npc_id
        where nr.node_id = ${id};`;


    return executeQuery(sql, [id])
        .then((results) => results);
}

export function getUserCampaigns(id) {
    let sql = `SELECT * FROM campaigns
                WHERE user_id = ${id}`;
    return executeQuery(sql, [id])
        .then((results) => results);
}

export function postUserCampaign(name, desc, user_id) {
    let sql = `INSERT INTO campaigns (campaign_name, campaign_description, user_id)
                VALUE (${name}, ${desc}, ${user_id})`
    return executeQuery(sql, [name, desc, user_id])
        .then((results) => results);
}

export function getUserNPCs(id) {
    let sql = `SELECT * FROM npc
                WHERE user_id = ${id}`
    return executeQuery(sql, [id])
        .then((results) => results)
}

export function getCampaignNodes(id) {
    let sql = `SELECT * FROM nodes
                WHERE campaign_id = ${id}`
    return executeQuery(sql, [id])
        .then((results) => results)
}

export function postNode(name, desc, loc_id, camp_id) {
    let sql = `INSERT INTO nodes (node_name, node_description, location_id, campaign_id)
                VALUE (${name}, ${desc}, ${loc_id}, ${camp_id});
                INSERT INTO node_ref (node_id)
                VALUE (LAST_INSERT_ID())`
    return executeQuery(sql, [name, desc, loc_id, camp_id])
        .then((results) => results)
}

export function postTrap(name, type, seen_dc, disarm_dc, desc, damage) {
    let sql = `INSERT INTO traps (trap_name, trap_type, trap_seen_dc, trap_disarm_dc, trap_description, trap_damage)
                VALUE (${name}, ${type}, ${seen_dc}, ${disarm_dc}, ${desc}, ${damage})
                INSERT INTO node_ref (trap_id)
                VALUE (LAST_INSERT_ID())`
    return executeQuery(sql, [name, type, seen_dc, disarm_dc, desc, damage])
        .then((results) => results)
}