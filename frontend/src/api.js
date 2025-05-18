import axios from 'axios';

const api = axios.create();

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['X-User-Role'] = 'USER';
    config.headers['X-User-Id'] = 'admin';
  }
  return config;
});

export default api;
