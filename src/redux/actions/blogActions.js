import blogsApi from '../../apis/blogsApi';
import {
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_ERROR,
  GET_ALL_BLOGS_SUCCESS,
  GET_ALL_BLOGS_ERROR,
  GET_SINGLE_BLOG_SUCCESS,
  GET_SINGLE_BLOG_ERROR,
} from '../constants';

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
    const response = await blogsApi.getBlogById(id);
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
