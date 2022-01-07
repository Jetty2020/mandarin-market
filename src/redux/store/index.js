import { configureStore } from '@reduxjs/toolkit';
import reducer from '../slices';

export default configureStore({
  reducer,
});
