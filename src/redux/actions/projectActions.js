import projectApi from '../../apis/projectApi';
import { GET_ALL_PROJECTS_SUCCESS, GET_ALL_PROJECTS_ERROR } from '../constants';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await projectApi.getAllProjects();
    dispatch({
      type: GET_ALL_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PROJECTS_ERROR,
      payload: error,
    });
  }
};
