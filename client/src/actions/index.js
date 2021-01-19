import axios from 'axios';
import { FETCH_USER, LOGOUT } from './types';

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
  console.log(response.data.data);
  dispatch({ type: FETCH_USER, payload: response.data });
};
