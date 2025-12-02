import axios from 'axios';

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL;

function normalizeBaseUrl(url: string | undefined): string {
  if (!url) {
    return '/api';
  }

  const trimmed = url.replace(/\/+$/, '');

  if (/\/api$/i.test(trimmed)) {
    return trimmed;
  }

  return `${trimmed}/api`;
}

export const api = axios.create({ baseURL: normalizeBaseUrl(rawBaseUrl) });

// Add Authorization header to all requests if token exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
