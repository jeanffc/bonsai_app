import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/',
});

export default api;
