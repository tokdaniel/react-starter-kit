import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});
