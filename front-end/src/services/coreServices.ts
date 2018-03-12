import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    responseType: 'json'
});