import * as baseService from './base';

function all(id) {
    return baseService.get(`/api/campaigns/nodes/${id}`);
}

function one(id) {
    return baseService.get(`/api/campaigns/nodes/${id}`);
}

function insert(data) {
    return baseService.post('/api/campaigns/nodes', data);
}

function update(id, data) {
    return baseService.put(`/api/campaigns/nodes/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/campaigns/nodes/${id}`);
}

function oneNode(id) {
    return baseService.get(`/api/nodes/${id}`);
}

export { all, one, insert, update, destroy, oneNode };