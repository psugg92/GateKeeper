import * as baseService from './base';

function all(id) {
    return baseService.get(`/api/nodes/${id}`);
}

function one(id) {
    return baseService.get(`/api/nodes/${id}`);
}

function insert(data) {
    return baseService.post('/api/nodes', data);
}

function update(id, data) {
    return baseService.put(`/api/nodes/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/nodes/${id}`);
}

export { all, one, insert, update, destroy };