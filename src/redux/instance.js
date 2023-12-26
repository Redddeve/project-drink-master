import axios from 'axios';

const baseUrl = 'https://shaking-code-api-lifuss.onrender.com';
// const baseUrl = 'http://localhost:3002';

const instance = axios.create({
  baseURL: baseUrl + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export default instance;
