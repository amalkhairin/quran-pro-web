import axios from 'axios';

const jsonApi = axios.create({
  // baseURL: 'http://localhost:3001/',
  baseURL: 'https://quran-pro-web.vercel.app/',
  timeout: 5000,
});

export default jsonApi;
