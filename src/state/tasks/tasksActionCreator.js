import * as types from './tasksActionTypes';
import codeClanApi from '../../api/apiUtils';

export const getAllTasksAction = trackId => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .get('/tasks')
      .then(res => {
        console.log({ trackId });
        console.log(res.data.items);
        const tasks = res.data.items.filter(task => task.track === trackId);
        const tasksObj = { items: tasks, totalCount: tasks.length };
        dispatch({ type: types.TASKS_SUCCESS, payload: tasksObj });

        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occured';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const getSingleTaskAction = id => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .get(`/tasks/${id}`)
      .then(res => {
        dispatch({ type: types.GET_TASK, payload: res.data });
        // history.push(`/dashboard`)
      })
      .catch(err => {
        console.log({ err });
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const submitTaskAction = (taskId, url, comments) => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .post(`/tasks/${taskId}/submit`, {
        description: comments,
        taskUrl: url,
      })
      .then(res => {
        dispatch({ type: types.SUBMIT_TASK });
      })
      .catch(err => {
        console.log({ err });
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};
