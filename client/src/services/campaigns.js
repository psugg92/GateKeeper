import * as baseService from './base';

function all(id) {
    return baseService.get(`/api/campaigns/${id}`);
}

function one(id) {
    return baseService.get(`/api/campaigns/${id}`);
}

function insert(data) {
    return baseService.post('/api/campaigns', data);
}

function update(id, data) {
    return baseService.put(`/api/campaigns/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/campaigns/${id}`);
}

export { all, one, insert, update, destroy };