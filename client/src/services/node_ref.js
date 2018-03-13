import * as baseService from './base';

function postNpcToNodeRef(id, data) {
    return baseService.post(`api/npc/${id}`, data);
}

function postTrapToNodeRef(id, data) {
    return baseService.post(`api/traps/${id}`, data);
}

function postTreasuresToNodeRef(id, data) {
    return baseService.post(`api/treasures/${id}`, data);
}

export { postNpcToNodeRef, postTrapToNodeRef, postTreasuresToNodeRef };