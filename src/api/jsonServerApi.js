// src/utils/api.js
import axios from 'axios';

// Set base URL
const jsonApi = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 5000,
});

export default jsonApi;
