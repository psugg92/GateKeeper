import * as baseService from './base';

function postTreasure(data) {
    return baseService.post(`/api/treasures/`, data);
}

function getTreasures() {
    return baseService.get(`/api/treasures/`)
}


// function insertNode()

export { postTreasure, getTreasures };