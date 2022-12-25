import axios from "axios"
import {IProfile} from "../redux/reducers/profiles/profiles.types";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
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

  follow(userId: number) {
    return instance.post(`follow/${userId}`, {}).then(response => {
      return response.data;
    });
  },

  unFollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  }
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then(response => {
      return response.data;
    });
  },

  getUserStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(newStatus: string) {
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
  saveProfile(profile: IProfile) {
    return instance.put(`profile`, profile);
  }
};

export const authAPI = {
  authMe() {
    return instance.get('auth/me').then(response => {
      return response.data;
    });
  },

  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
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
