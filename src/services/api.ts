import axios from 'axios';

// To use env vars, import using import.meta.env.VITE_[varName]
export const api = axios.create({
  baseURL: `http://3.137.210.45:81/api`,
});
