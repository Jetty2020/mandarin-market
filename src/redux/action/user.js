import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../api/user';

export const loginUser = createAsyncThunk(
  '/user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await userAPI.loginUser(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

// export const registerUser = createAsyncThunk(
//   'user/register',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await userAPI.registerUser(data);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   },
// );
