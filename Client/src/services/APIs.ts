// src/services/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: "https://opham414-001-site1.jtempurl.com/",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        // config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
