import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { setToken, clearToken } from "../instance";
import { toast } from "react-toastify";

// AUTH OPERATIONS
export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("auth/signup", credentials);
      setToken(data.token);
      toast.success(`Welcome ${data.user.email}`);
      return data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          toast.error(`Validation error: please check your data`);
          break;
        case 409:
          toast.error(`Error: User with such email already exists`);
          break;
        default:
          break;
      }
      return rejectWithValue(error.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  "auth/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("auth/signin", credentials);
      setToken(data.token);
      toast.success(`Hello, ${data.user.email}`);
      return data;
    } catch (error) {
      toast.error(`Email or password is not valid`);
      return rejectWithValue(error.message);
    }
  }
);

export const signoutThunk = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue, getState }) => {
    try {
      await instance.delete("auth/signout");
      clearToken();
      toast.info(`Bye, ${getState().auth.user.email} `);
    } catch (error) {
      switch (error.response.status) {
        case 401:
          toast.error("Bearer auth failed. You are not authorized to log out.");
          break;
        default:
          toast.warning(`Something went wrong. Please try again later.`);
          break;
      }
      return rejectWithValue(error.message);
    }
  }
);

// USER OPERATIONS

export const updateThunk = createAsyncThunk(
  "auth/update",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.put("users/update", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(`Profile updated`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "users/refresh",
  async (_, { rejectWithValue, getState }) => {
    const savedToken = getState().auth.token;
    if (!savedToken) {
      return rejectWithValue("token was not found");
    }
    try {
      setToken(savedToken);
      const { data } = await instance.get("users/current");
      toast.success(`Welcome back, ${data.email}`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get("users/current");
      toast.success(`Welcome back, ${data.email}`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

export const subscribeThunk = createAsyncThunk(
  "users/subscribe",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await instance.post("users/subscribe", credentials);
      toast.success(`You have subscribed to ${credentials.email}`);
      return res.data;
    } catch (error) {
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);
