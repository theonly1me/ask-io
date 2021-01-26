import axios from 'axios';
import { FETCH_USER, LOGOUT, SUBMIT_SURVEY } from './types';

export const getUser = () => async (dispatch, getState) => {
  const response = await axios.get('/api/v1/user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const logout = () => async (dispatch, getState) => {
  await axios.get('/api/v1/logout');
  dispatch({ type: LOGOUT });
};

export const handleToken = token => async (dispatch, getState) => {
  const response = await axios.post('/api/v1/payments', token);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitSurvey = values => {
  return {
    type: SUBMIT_SURVEY,
    payload: values,
  };
};
