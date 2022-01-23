import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../action/user';

const init = {
  loading: 'idle',
  isLoggedIn: false,
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState: init,
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = 'pending';
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = 'idle';
      if (action.payload.user) {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.error = null;
      } else if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = 'idle';
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    },

    // [registerUser.pending]: (state) => {
    //   state.loading = 'pending';
    // },
    // [registerUser.fulfilled]: (state, action) => {
    //   state.loading = 'idle';
    //   state.error = null;
    // },
    // [registerUser.rejected]: (state, action) => {
    //   state.loading = 'idle';
    //   if (action.payload) {
    //     state.error = action.payload.message;
    //   } else {
    //     state.error = action.error.message;
    //   }
    // },
  },
});

export default userSlice.reducer;
