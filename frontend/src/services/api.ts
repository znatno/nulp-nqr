import axios from 'axios';

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL;

const baseURL = rawBaseUrl ? rawBaseUrl.replace(/\/$/, '') : '/api';

export const api = axios.create({ baseURL });
