import instance, { clearToken, setToken } from '../instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// DRINKS OPERATIONS

export const fetchAllDrinks = createAsyncThunk(
  'drinks/fetchAllDrinks',
  async (body, { rejectWithValue, getState }) => {
    const { limit = 3 } = body;
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get(`/drinks/mainpage?limit=${limit}`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Please try again later.`);
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getPopularThunk = createAsyncThunk(
  'drinks/popular',
  async (_, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get('/drinks/popular');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchDrinksThunk = createAsyncThunk(
  'drinks/search',
  async (body, { rejectWithValue, getState }) => {
    const {
      category = '',
      ingredients = '',
      drink = '',
      page = 1,
      limit = 12,
    } = body;
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get(
        `/drinks/search?category=${category}&ingredients=${ingredients}&drink=${drink}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDrinkbyIdThunk = createAsyncThunk(
  'drinks/id',
  async (id, { getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get(`/drinks/${id}`);
      return data;
    } catch (error) {
      return window.location.assign(
        'https://redddeve.github.io/project-drink-master/'
      );
    }
  }
);

// USER OWN OPERATIONS

export const getOwnDrinksThunk = createAsyncThunk(
  'drinks/own',
  async (_, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get('/drinks/own');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      return rejectWithValue(error.message);
    }
  }
);

export const addOwnDrinkThunk = createAsyncThunk(
  '/drinks/own/add',
  async (credentials, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.post('/drinks/own/add', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(`Drink added successfully`);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOwnDrinkThunk = createAsyncThunk(
  '/drinks/own/remove',
  async (id, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.delete(`/drinks/own/remove/${id}`);
      toast.success(`Drink deleted successfully`);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

// USER FAVORITES OPERATIONS

export const getFavoriteDrinksThunk = createAsyncThunk(
  'drinks/favorite',
  async ({ page, itemsPerPage: limit }, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get(
        `/drinks/favorite?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      return rejectWithValue(error.message);
    }
  }
);

export const addFavoriteDrinkThunk = createAsyncThunk(
  '/drinks/favorite/add',
  async (id, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.post(`/drinks/favorite/add`, {
        cocktailId: id,
      });
      toast.success(`Drink added to favorites`);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteDrinkThunk = createAsyncThunk(
  '/drinks/favorite/remove',
  async (id, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      await instance.delete(`/drinks/favorite/remove`, {
        headers: {},
        data: { cocktailId: id },
      });
      toast.success(`Drink removed from favorites`);
      return id;
    } catch (error) {
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      toast.error(`Something went wrong. Please try again later.`);
      return rejectWithValue(error.message);
    }
  }
);

// FILTERS OPERATIONS

export const getCategoriesThunk = createAsyncThunk(
  'filters/categories',
  async (_, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get('/filters/categories');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearToken();
        location.reload();
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getIngredientsThunk = createAsyncThunk(
  'filters/ingredients',
  async (_, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get('/filters/ingredients');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getGlassesThunk = createAsyncThunk(
  'filters/glasses',
  async (_, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.get('/filters/glasses');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
