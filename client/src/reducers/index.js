import { combineReducers } from 'redux';
import { FETCH_USER, LOGOUT } from '../actions/types';
import { reducer as formReducer } from 'redux-form';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload ? { user: action.payload } : false;
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
