// lib/axiosConfig.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://backend-production-0309.up.railway.app',
});

export default instance;
