import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
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
    isAdult: false,
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isRefresh: true,
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
      .addCase(subscribeThunk.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(signoutThunk.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.token = '';
        state.user = {
          email: '',
          name: '',
          avatarURL: '',
        };
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
        state.error = payload;
      })
      .addMatcher(
        isAnyOf(
          signinThunk.pending,
          signoutThunk.pending,
          signupThunk.pending,
          subscribeThunk.pending,
          updateThunk.pending
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
