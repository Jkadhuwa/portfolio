import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import {
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_ERROR,
  GET_ALL_BLOGS_SUCCESS,
  GET_ALL_BLOGS_ERROR,
} from '../../constants';
import { getAllBlogs, createBlog } from '../blogActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ blogs: {} });

describe('Test All Blog Redux Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  it('Should dispatch GET_ALL_BLOGS_SUCCESS action type', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = [{ type: GET_ALL_BLOGS_SUCCESS }];
    return store.dispatch(getAllBlogs()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('Should dispatch GET_ALL_BLOGS_ERROR action type', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
      });
    });
    const expectedActions = [GET_ALL_BLOGS_ERROR];
    return store.dispatch(getAllBlogs()).then(() => {
      const type = store.getActions().map((action) => action.type);
      expect(type).toEqual(expectedActions);
    });
  });

  it('Should dispatch CREATE_BLOG_ERROR action type', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
      });
    });
    const expectedActions = [CREATE_BLOG_ERROR];
    return store.dispatch(createBlog()).then(() => {
      const type = store.getActions().map((action) => action.type);
      expect(type).toEqual(expectedActions);
    });
  });

  it('Should dispatch CREATE_BLOG_SUCCESS action type', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const createBlogMock = {
      title: 'Here comes the soldiers',
      body: 'Here comes the trouble, Hailesalasie`s Zion Army ready to conquer',
    };
    const expectedActions = [{ type: CREATE_BLOG_SUCCESS }];
    return store
      .dispatch(createBlog(createBlogMock.title, createBlogMock.body))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
