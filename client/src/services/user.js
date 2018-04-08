import * as baseService from './base';

let loggedIn = false;

function isLoggedIn() {
    return loggedIn;
}

function checkLogin() {
    if (loggedIn) {
        return Promise.resolve(true);
    } else {
        baseService.populateAuthToken();
        return me()
        .then((user) => {
            loggedIn = true;
            userid = getUserId();
            console.log("the user id is ", userid)
            return Promise.resolve(true);
        }).catch(() => {
            return Promise.resolve(false);
        });
    }
}

function login(email, password) {
    return baseService.makeFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
            .then((jsonResponse) => {
                baseService.setAuthToken(jsonResponse.token);
                loggedIn = true;
                return jsonResponse.user;
            });
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function logout() {
    baseService.clearAuthToken();
    loggedIn = false;
}

function me() {
    return baseService.get('/api/users/me')
    .then(data => {
        userid = data.id
        return userid;
    });
}

function getSingleUser(id) {
    return baseService.get(`/api/users/${id}`)
}

function getUserId() {
    return userid;
}

let userid

export { isLoggedIn, checkLogin, login, logout, getUserId, getSingleUser };
