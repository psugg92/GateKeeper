import * as baseService from './base';

function postToNodeRef(data) {
    return baseService.post(`/api/noderef/`, data);
}

export { postToNodeRef };