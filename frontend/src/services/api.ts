import axios from 'axios';

// proxy handles /api → 4000 in dev, same-origin in prod
export const api = axios.create({ baseURL: '/api' });
