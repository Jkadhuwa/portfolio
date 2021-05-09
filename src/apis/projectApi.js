import axios from 'axios';
import { backend_url } from './api';

export default {
  async getAllProjects() {
    return await axios.get(`${backend_url}/projects`);
  },

  async getProjectById(id) {
    return await axios.get(`${backend_url}/projects/categoryId/${id}`);
  },
};
