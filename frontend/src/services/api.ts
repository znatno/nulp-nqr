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
