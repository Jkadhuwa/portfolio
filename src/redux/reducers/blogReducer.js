import {
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_ERROR,
  GET_ALL_BLOGS_SUCCESS,
  GET_ALL_BLOGS_ERROR,
  GET_SINGLE_BLOG_SUCCESS,
  GET_SINGLE_BLOG_ERROR,
} from '../constants';

const createBlogState = {};
export const getBlogs = {
  loading: true,
};

export const singleBlog = {
  loading: true,
};

export const createBlog = (state = createBlogState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BLOG_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case CREATE_BLOG_ERROR:
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const getAllBlogs = (state = getBlogs, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,
      };

    case GET_ALL_BLOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const getSingleBlog = (state = singleBlog, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,
      };

    case GET_SINGLE_BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
