import { createSlice } from "@reduxjs/toolkit";
import {
  signOutHandler,
  signInHandler,
  signUpHandler,
  loggedInUserInfo,
} from "./thunk";

const initialState = {
  currentUser: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.currentUser = action.payload;
    },
    signOut: (state) => {
      state.currentUser = undefined;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(signUpHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(signUpHandler.rejected, (state) => {
        state.loading = false;
        state.currentUser = undefined;
      })
      .addCase(signOutHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOutHandler.fulfilled, (state) => {
        state.loading = false;
        state.currentUser = undefined;
      })
      .addCase(signOutHandler.rejected, (state) => {
        state.loading = false;
        state.currentUser = undefined;
      })

      .addCase(loggedInUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(loggedInUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(loggedInUserInfo.rejected, (state) => {
        state.loading = false;
        state.currentUser = undefined;
      })
      .addCase(signInHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(signInHandler.rejected, (state) => {
        state.loading = false;
        state.currentUser = undefined;
      });
  },
});

export const { signUp } = authSlice.actions;
export default authSlice.reducer;
