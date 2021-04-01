/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 10 * 1000,
  exclude: { query: false },
});

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  adapter: cache.adapter,
});
