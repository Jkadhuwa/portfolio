import axios from 'axios';
import { backend_url } from './api';

export default {
  async getBlogs() {
    return await axios.get(`${backend_url}/blogs`);
  },
};
