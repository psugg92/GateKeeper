import * as baseService from './base';

function postTrap(data) {
    return baseService.post(`/api/traps/`, data);
}

function getTraps() {
    return baseService.get(`/api/traps/`)
}


// function insertNode()

export { postTrap, getTraps };