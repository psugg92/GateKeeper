import * as baseService from './base';

function postNpc(data) {
    return baseService.post(`/api/npc/`, data);
}


// function insertNode()

export { postNpc };