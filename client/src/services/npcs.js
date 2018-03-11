import * as baseService from './base';

function postNpc(data) {
    return baseService.post(`/api/npc/`, data);
}

function getNpcs() {
    return baseService.get(`/api/npc/1`);
}

// function insertNode()

export { postNpc, getNpcs };