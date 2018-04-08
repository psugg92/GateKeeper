import { executeQuery } from "./config/db";

export function getSingleNode(id) {
  let sql = `select n.node_name, n.node_description, l.location_name, l.location_description, t.*, tr.*, npc.*
        from node_ref nr
          left join nodes n on n.id = nr.node_id
          left join locations l on l.id = n.location_id
          left join traps t on t.id = nr.trap_id
          left join treasure tr on tr.id = nr.treasure_id
          left join npc on npc.id = nr.npc_id
        where nr.node_id = ${id};`;

  return executeQuery(sql, [id]).then(results => results);
}

export function getSingleCampaign(id) {
  let sql = `SELECT * FROM campaigns
            WHERE id = ${id}`;
  return executeQuery(sql, [id]).then(results => results);
}

export function getUserCampaigns(id) {
  let sql = `SELECT * FROM campaigns
                WHERE user_id = ${id}`;
  return executeQuery(sql, [id]).then(results => results);
}

export function getSingleUser(id) {
  let sql = `SELECT username FROM users
            WHERE id = ${id}`
  return executeQuery(sql, [id]).then(results => results);
}

export function postUserCampaign(name, desc, user_id) {
  let sql = `INSERT INTO campaigns (campaign_name, campaign_description, user_id)
                VALUE (${`"${name}"`}, ${`"${desc}"`}, ${user_id})`;
  return executeQuery(sql, [name, desc, user_id]).then(results => results);
}

export function getUserNPCs(id) {
  let sql = `SELECT * FROM npc
                WHERE user_id = ${id}`;
  return executeQuery(sql, [id]).then(results => results);
}

export function getCampaignNodes(id) {
  let sql = `SELECT * FROM nodes
                WHERE campaign_id = ${id}`;
  return executeQuery(sql, [id]).then(results => results);
}

export function getCampaignLocations(id) {
  let sql = `SELECT * FROM locations
                WHERE campaign_id = ${id}`;
  return executeQuery(sql, [id]).then(results => results);
}

export function postCampaignLocation(name, desc, lore, camp_id) {
  let sql = `INSERT INTO locations (location_name, location_description, location_lore, campaign_id)
                VALUE (${`"${name}"`}, ${`"${desc}"`}, ${`"${lore}"`}, ${camp_id})`;
  return executeQuery(sql, [name, desc, lore, camp_id]).then(
    results => results
  );
}

//change sometime
export function postNode(name, desc, loc_id, camp_id) {
  let sql = `CALL insertNode("${name}", "${desc}", ${loc_id}, ${camp_id})`;
  return executeQuery(sql, [name, desc, loc_id, camp_id]).then(
    results => results
  );
}

export function postTrap(name, type, seen_dc, disarm_dc, desc, damage) {
  let sql = `INSERT INTO traps (trap_name, trap_type, trap_seen_dc, trap_disarm_dc, trap_description, trap_damage_die)
                VALUES (${`"${name}"`}, ${`"${type}"`}, ${seen_dc}, ${disarm_dc}, ${`"${desc}"`}, ${damage})`
  return executeQuery(sql, [name, type, seen_dc, disarm_dc, desc, damage]).then(
    results => results
  );
}

export function getTraps() {
  let sql = `SELECT * FROM traps`
  return executeQuery(sql, [])
  .then(results => results);
}

export function getTreasure() {
  let sql = `SELECT * FROM treasure`
  return executeQuery(sql, [])
  .then(results => results);
}

export function postTreasure(name, value, desc) {
  let sql = `INSERT INTO treasure (loot_name, loot_value, loot_description)
            VALUES ("${name}", ${value}, "${desc}")`
  return executeQuery(sql, [name, value, desc])
  .then(results => results);
}

export function postNPC(
  name,
  // user_id,
  size,
  alignment,
  armor,
  hp,
  speed,
  fly_speed,
  climb_speed,
  str,
  dex,
  con,
  int,
  wis,
  chr,
  STstr,
  STdex,
  STcon,
  STint,
  STwis,
  STchr,
  skills,
  damage_immunity,
  condition_immunity,
  senses,
  passive_perception,
  xp_reward,
  desc,
  actions,
  legendary_actions,
  lair_actions
) {
  let sql = `INSERT INTO npc (npc_name,
                                    user_id,
                                    npc_size,
                                    npc_alignment,
                                    npc_armor,
                                    npc_hp,
                                    npc_speed,
                                    npc_fly_speed,
                                    npc_climb_speed,
                                    npc_strength,
                                    npc_dexterity,
                                    npc_constitution,
                                    npc_intelligence,
                                    npc_wisdom,
                                    npc_charisma,
                                    npc_st_strength,
                                    npc_st_dexterity,
                                    npc_st_constitution,
                                    npc_st_intelligence,
                                    npc_st_wisdom,
                                    npc_st_charisma,
                                    npc_skills,
                                    npc_damage_immunity,
                                    npc_condition_immunity,
                                    npc_senses,
                                    npc_passive_perception,
                                    npc_xp_reward,
                                    npc_description,
                                    npc_actions,
                                    npc_legendary_actions,
                                    npc_lair_actions
                                )
                    VALUES ("${name}",
                            1,
                            "${size}",
                            "${alignment}",
                            ${armor},
                            ${hp},
                            ${speed},
                            ${fly_speed},
                            ${climb_speed},
                            ${str},
                            ${dex},
                            ${con},
                            ${int},
                            ${wis},
                            ${chr},
                            ${STstr},
                            ${STdex},
                            ${STcon},
                            ${STint},
                            ${STwis},
                            ${STchr},
                            "${skills}",
                            "${damage_immunity}",
                            "${condition_immunity}",
                            "${senses}",
                            ${passive_perception},
                            ${xp_reward},
                            "${desc}",
                            "${actions}",
                            "${legendary_actions}",
                            "${lair_actions}")`;
  return executeQuery(sql, [
    name,
    // user_id,
    size,
    alignment,
    armor,
    hp,
    speed,
    fly_speed,
    climb_speed,
    str,
    dex,
    con,
    int,
    wis,
    chr,
    STstr,
    STdex,
    STcon,
    STint,
    STwis,
    STchr,
    skills,
    damage_immunity,
    condition_immunity,
    senses,
    passive_perception,
    xp_reward,
    desc,
    actions,
    legendary_actions,
    lair_actions
  ]).then(results => results);
}



export function getLastMadeNodeId() {
  let sql = `SELECT id FROM nodes
                    ORDER BY created DESC`;
  return executeQuery(sql, []).then(results => results);
}

export function insertToNodeRef(node_id, trap_id = 0, treasure_id = 0, npc_id = 0) {
  let sql =  `INSERT INTO node_ref (node_id, trap_id, treasure_id, npc_id)
              VALUES (${node_id}, ${trap_id}, ${treasure_id}, ${npc_id})`
  return executeQuery(sql, [node_id, trap_id, treasure_id, npc_id])
  .then(results => results);
}