import axios from 'axios';

// To use env vars, import using import.meta.env.VITE_[varName]
export const api = axios.create({
  baseURL: `http://${window.location.hostname}:3001/api`,
});
