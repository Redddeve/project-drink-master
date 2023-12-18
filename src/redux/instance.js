import axios from 'axios';

const baseUrl = 'https://shaking-code-api-lifuss.onrender.com';

const instance = axios.create({
  baseURL: baseUrl + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
setToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2VjOWI1YjYxNTcxM2UzNzgwYTdkOSIsImlhdCI6MTcwMjg5NjU4OCwiZXhwIjoxNzAyOTgyOTg4fQ.EhMi3TL1C5yTxPBDBFyJd-lmUnxEty6MeuUWZ9mc9mA'
);
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export default instance;
