import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  emailPasswordSignUp,
  emailPasswordSignIn,
  userLogout,
  getUserInfo,
} from "./services";

export const signInHandler = createAsyncThunk(
  "auth/user-signin",
  async (thunkObj) => await emailPasswordSignIn(thunkObj)
);

export const signUpHandler = createAsyncThunk(
  "auth/user-signup",
  async (thunkObj) => await emailPasswordSignUp(thunkObj)
);

export const signOutHandler = createAsyncThunk(
  "auth/user-logout",
  async () => await userLogout()
);

export const loggedInUserInfo = createAsyncThunk(
  "auth/user-info",
  async (token) => {
    try {
      return await getUserInfo(token);
    } catch (error) {
      console.log(error);
    }
  }
);
