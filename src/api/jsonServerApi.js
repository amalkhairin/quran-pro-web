import axios from 'axios';

const jsonApi = axios.create({
  // baseURL: 'http://localhost:3001/',
  baseURL: 'https://json-server-db-five.vercel.app/',
  timeout: 5000,
});

export default jsonApi;
