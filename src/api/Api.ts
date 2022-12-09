import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

    follow(userID: any) {
        return instance.post('follow/' + userID, {}).then(response => {
            return response.data;
        });
    },

    unFollow(userID: any) {
        return instance.delete('follow/' + userID).then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getProfile(userID: any) {
        return instance.get('profile/' + userID).then(response => {
            return response.data;
        });
    },

    getUserStatus(userID: any) {
        return instance.get('profile/status/' + userID);
    },

    updateStatus(newStatus: any) {
        return instance.put('profile/status', {status: newStatus});
    },

    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile);
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me').then(response => {
            return response.data;
        });
    },

    login(email: any, password: any, rememberMe = false, captcha = null) {
        return instance.post('auth/login/', {email, password, rememberMe, captcha});
    },

    logout() {
        return instance.delete('auth/login');
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
};
