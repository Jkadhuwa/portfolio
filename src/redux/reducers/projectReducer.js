import { GET_ALL_PROJECTS_SUCCESS, GET_ALL_PROJECTS_ERROR } from '../constants';

const getProjects = {
  loading: true,
  projects: [],
};

export const getAllProjects = (state = getProjects, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload.projects,
      };

    case GET_ALL_PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};
