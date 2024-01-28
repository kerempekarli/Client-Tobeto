// src/services/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:6280/api', // İstediğiniz API base URL'sini buraya ekleyin
  timeout: 5000, // İsteğin maksimum süresi (opsiyonel)
});

export default instance;
