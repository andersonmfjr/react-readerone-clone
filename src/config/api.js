import axios from 'axios';

const api = axios.create({
  baseURL: 'http://reader.one/api',
});

export default api;
