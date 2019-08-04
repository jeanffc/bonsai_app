import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets',
});

export default api;
