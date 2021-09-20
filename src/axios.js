import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/belen-ciaga/us-central1/api',
});

export default instance;
