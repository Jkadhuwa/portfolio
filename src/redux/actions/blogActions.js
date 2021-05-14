import blogsApi from '../../apis/blogsApi';
import {
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_ERROR,
  GET_ALL_BLOGS_SUCCESS,
  GET_ALL_BLOGS_ERROR,
  GET_SINGLE_BLOG_SUCCESS,
  GET_SINGLE_BLOG_ERROR,
} from '../constants';
// import store from '../store';

export const createBlog = (title, body) => async (dispatch) => {
  const payload = {};

  payload.title = title;
  payload.body = body;
  try {
    const response = await blogsApi.createBlog(payload);

    return dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    return dispatch({ type: CREATE_BLOG_ERROR, payload: error });
  }
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    const response = await blogsApi.getBlogs();
    return dispatch({
      type: GET_ALL_BLOGS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    return dispatch({
      type: GET_ALL_BLOGS_ERROR,
      payload: error,
    });
  }
};

export const getBlogByID = (id) => async (dispatch) => {
  try {
    // const { blogs } = store.getState().Blogs;
    // let response;
    // console.log(blogs, 'response');
    // if (!blogs.length) {
    const response = await blogsApi.getBlogById(id);
    // } else {
    //   const [blog] = blogs.filter((blog) => blog.blog_id == id);
    //   console.log(blog, 'res1');
    // }

    return dispatch({
      type: GET_SINGLE_BLOG_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    return dispatch({
      type: GET_SINGLE_BLOG_ERROR,
      payload: error,
    });
  }
};
