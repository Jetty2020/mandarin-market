import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../action/user';

const init = {
  // userInfo: {},
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
      // state.user.id = action.user.id;
      // state.user.token = action.payload.data.jwt;
      // state.user.userID = action.payload.data.userId;
      state.error = null;
      console.log(1, action);
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = 'idle';
      // if (action.payload) {
      //   state.error = action.payload.message;
      // } else {
      //   state.error = action.error.message;
      // }
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
