import { combineReducers } from '@reduxjs/toolkit';
// import postReducer from './postSlice';
import userSlice from './userSlice';

const reducer = combineReducers({
  // post: postReducer,
  user: userSlice,
});

export default reducer;
