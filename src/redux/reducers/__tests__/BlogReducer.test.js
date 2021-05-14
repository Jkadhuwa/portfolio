import { getAllBlogs, createBlog, getSingleBlog } from '../blogReducer';
import * as types from '../../constants';
import data from '../../../pages/__mocks__/blogsMock';

describe('Test Blog Reducer', () => {
  const payload = {
    blogs: data.blogs,
  };
  const error = data.error.message;
  it('Should return default state', () => {
    expect(getAllBlogs(undefined, {})).toEqual({ loading: true, blogs: [] });
  });

  it('Should return new all blogs in state', () => {
    const newState = getAllBlogs(
      {},
      {
        type: types.GET_ALL_BLOGS_SUCCESS,
        payload,
      }
    );
    expect(newState.loading).toBe(false);
    expect(newState.blogs.length).toBe(2);
  });

  it('Should return an ERROR STATE ', () => {
    const newState = getAllBlogs(
      {},
      {
        type: types.GET_ALL_BLOGS_ERROR,
        payload: error,
      }
    );
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual('No Blogs found at the moment.');
  });

  it('Should create a new Blog', () => {
    const payload = {
      message: 'Blog created successfully',
      status: 'success',
    };
    const newState = createBlog(
      {},
      {
        type: types.CREATE_BLOG_SUCCESS,
        payload,
      }
    );
    expect(newState.message).toEqual('Blog created successfully');
  });

  it('Should return an Error', () => {
    const payload = {
      status: 'error',
    };
    const newState = createBlog(
      {},
      {
        type: types.CREATE_BLOG_ERROR,
        payload,
      }
    );
    expect(newState.status).toEqual('error');
  });

  it('Should return a Single blog', () => {
    const payload = {
      loading: true,
      blog: data.blog,
      status: 'success',
    };
    const newState = getSingleBlog(
      {},
      {
        type: types.GET_SINGLE_BLOG_SUCCESS,
        payload,
      }
    );
    expect(newState.status).toEqual('success');
  });

  it('Should return GET_SINGLE_BLOG_ERROR', () => {
    const newState = getSingleBlog(
      {},
      {
        type: types.GET_SINGLE_BLOG_ERROR,
        payload: error,
      }
    );
    expect(newState.error).toEqual('No Blogs found at the moment.');
  });
});
