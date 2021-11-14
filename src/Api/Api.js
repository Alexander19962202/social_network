import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "41a301f3-1510-488a-b73d-f4713384558e"
    }
});


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

    follow(userID) {
        return instance.post('follow/' + userID, {}).then(response => {
            return response.data;
        });
    },

    unFollow(userID) {
        return instance.delete('follow/' + userID).then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getProfile(userID) {
        return instance.get('profile/' + userID).then(response => {
            return response.data;
        });
    },

    getUserStatus(userID) {
        return instance.get('profile/status/' + userID);
    },

    updateStatus(newStatus) {
        return instance.put('profile/status', {status: newStatus});
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me').then(response => {
            return response.data;
        });
    },

    login(email, password, rememberMe = false) {
        return instance.post('auth/login/', {email, password, rememberMe});
    },

    logout() {
        return instance.delete('auth/login');
    }
};
