import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  refreshThunk,
  signinThunk,
  signoutThunk,
  signupThunk,
  subscribeThunk,
  updateThunk,
} from './operations';

const initialState = {
  user: {
    email: '',
    name: '',
    avatarURL: '',
    subscribed: false,
    isAdult: false,
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
  error: null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signinThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(updateThunk.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL || null;
        state.user.name = payload.name || null;
      })
      .addCase(subscribeThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.subscribed = payload.subscribed;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(signoutThunk.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.token = '';
        state.user = {
          email: '',
          name: '',
          avatarURL: '',
          subscribed: false,
        };
      })
      .addMatcher(
        isAnyOf(
          signinThunk.pending,
          signoutThunk.pending,
          signupThunk.pending,
          subscribeThunk.pending,
          updateThunk.pending,
          getCurrentUserThunk.pending,
          refreshThunk.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signinThunk.rejected,
          signoutThunk.rejected,
          signupThunk.rejected,
          subscribeThunk.rejected,
          updateThunk.rejected,
          getCurrentUserThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
