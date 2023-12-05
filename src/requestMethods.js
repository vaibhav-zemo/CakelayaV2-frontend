import axios from 'axios';

const BASE_URL = 'https://cakelaya.com/api/';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})