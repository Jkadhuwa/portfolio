import { getAllProjects } from '../projectReducer';
import * as types from '../../constants';
import projects from '../../../pages/__mocks__/projectsMock';

describe('Test Project Reducer', () => {
  const payload = {
    projects,
  };
  it('Should return default state', () => {
    expect(getAllProjects(undefined, {})).toEqual({ loading: true, projects: [] });
  });

  it('Should update the state with new Projects', () => {
    const newState = getAllProjects(
      {},
      {
        type: types.GET_ALL_PROJECTS_SUCCESS,
        payload,
      }
    );
    expect(newState.loading).toBe(false);
    expect(newState.projects.length).toBe(6);
  });

  it('Should return an ERROR STATE ', () => {
    const payload = {
      error: { message: 'No Projects found at the moment.' },
    };
    const newState = getAllProjects(
      {},
      {
        type: types.GET_ALL_PROJECTS_ERROR,
        payload,
      }
    );
    expect(newState.loading).toBe(false);
    expect(newState.error.message).toEqual('No Projects found at the moment.');
  });
});
