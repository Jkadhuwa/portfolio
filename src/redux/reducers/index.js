import { combineReducers } from 'redux';
import { createBlog, getAllBlogs, getSingleBlog } from './blogReducer';
import { getAllProjects } from './projectReducer';

export default combineReducers({
  createdBlog: createBlog,
  Blogs: getAllBlogs,
  Projects: getAllProjects,
  Blog: getSingleBlog,
});
