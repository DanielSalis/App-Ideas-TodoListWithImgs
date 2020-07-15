import axios from 'axios';

const apiUrl = process.env.API;

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default api;