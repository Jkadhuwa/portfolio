import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { GET_ALL_PROJECTS_SUCCESS, GET_ALL_PROJECTS_ERROR } from '../../constants';
import { getProjects } from '../projectActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ blogs: {} });

describe('Test All Projects Redux Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  it('Should dispatch GET_ALL_PROJECTS_SUCCESS action type', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = [{ type: GET_ALL_PROJECTS_SUCCESS }];
    return store.dispatch(getProjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should dispatch GET_ALL_PROJECTS_ERROR action type', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
      });
    });
    const expectedActions = [GET_ALL_PROJECTS_ERROR];
    return store.dispatch(getProjects()).then(() => {
      const type = store.getActions().map((action) => action.type);
      expect(type).toEqual(expectedActions);
    });
  });
});
