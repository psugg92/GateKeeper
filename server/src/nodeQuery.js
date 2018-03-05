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