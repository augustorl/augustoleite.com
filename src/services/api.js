import axios from 'axios';

const api = axios.create({
  baseURL: "https://email-api-portfolio.herokuapp.com",
});

export default api;