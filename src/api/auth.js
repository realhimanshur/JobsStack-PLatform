import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // Update this if your backend runs elsewhere
});

export const signup = (userData) => API.post('/signup', userData);
export const login = (credentials) => API.post('/login', credentials);