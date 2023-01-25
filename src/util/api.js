import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://long-blue-lemming-fez.cyclic.app/',
});

axiosApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
})

export default axiosApi;