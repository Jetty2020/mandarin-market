import { combineReducers } from '@reduxjs/toolkit';
// import postReducer from './postSlice';
import userSlice from './userSlice';

const reducer = (state, action) => {
  combineReducers({
    // post: postReducer,
    user: userSlice,
  })(state, action);
};

export default reducer;
