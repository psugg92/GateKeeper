import * as baseService from './base';

function all(id) {
    return baseService.get(`/api/campaigns/${id}`);
}

function allLocations(id) {
    return baseService.get(`/api/campaigns/locations/${id}`);
}

function one(id) {
    return baseService.get(`/api/singleCampaign/${id}`);
}
// for users, you will add an id to inserUsers, just like in inserLocation
function insert(data) {
    return baseService.post(`/api/campaigns/${data.user_id}`, data);
}

function insertLocation(data, id) {
    return baseService.post(`/api/campaigns/locations/${id}`, data);
}

function insertEvent(data, id) {
    return baseService.post(`/api/campaigns/nodes/${id}`, data);
}

function update(id, data) {
    return baseService.put(`/api/campaigns/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/campaigns/${id}`);
}



export { all, allLocations, one, insert, insertLocation, insertEvent, update, destroy };