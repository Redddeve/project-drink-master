import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteDrinkThunk,
  addOwnDrinkThunk,
  deleteOwnDrinkThunk,
  fetchAllDrinks,
  getCategoriesThunk,
  getDrinkbyIdThunk,
  getFavoriteDrinksThunk,
  getGlassesThunk,
  getIngredientsThunk,
  getOwnDrinksThunk,
  getPopularThunk,
  removeFavoriteDrinkThunk,
  searchDrinksThunk,
} from './operations';

const initialState = {
  drinks: [],
  byId: [],
  favorite: [],
  own: [],
  popular: [],
  categories: [],
  glasses: [],
  ingredients: [],
  searchDrinks: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const slice = createSlice({
  name: 'drinks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllDrinks.fulfilled, (state, { payload }) => {
        state.drinks = payload;
        state.isLoading = false;
      })
      .addCase(getPopularThunk.fulfilled, (state, { payload }) => {
        state.popular = payload;
        state.isLoading = false;
      })
      .addCase(searchDrinksThunk.fulfilled, (state, { payload }) => {
        state.searchDrinks = payload;
        state.isLoading = false;
      })
      .addCase(searchDrinksThunk.rejected, state => {
        state.searchDrinks = [];
        state.isLoading = false;
      })
      .addCase(getDrinkbyIdThunk.fulfilled, (state, { payload }) => {
        state.byId = payload;
        state.isLoading = false;
      })
      .addCase(getOwnDrinksThunk.fulfilled, (state, { payload }) => {
        state.own = payload;
        state.isLoading = false;
      })
      .addCase(addOwnDrinkThunk.fulfilled, (state, { payload }) => {
        state.own.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteOwnDrinkThunk.fulfilled, (state, { payload }) => {
        state.own = state.own.filter(({ _id }) => _id !== payload._id);
      })
      .addCase(getFavoriteDrinksThunk.fulfilled, (state, { payload }) => {
        state.favorite = payload;
        state.isLoading = false;
      })
      .addCase(addFavoriteDrinkThunk.fulfilled, (state, { payload }) => {
        state.favorite.push(payload);
        state.isLoading = false;
      })
      .addCase(removeFavoriteDrinkThunk.fulfilled, (state, { payload }) => {
        state.favorite = state.favorite.filter(
          ({ _id }) => _id !== payload._id
        );
        state.isLoading = false;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload.categories;
      })
      .addCase(getIngredientsThunk.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
      })
      .addCase(getGlassesThunk.fulfilled, (state, { payload }) => {
        state.glasses = payload.glasses;
      })
      .addMatcher(
        action =>
          [
            fetchAllDrinks.pending,
            getPopularThunk.pending,
            searchDrinksThunk.pending,
            getDrinkbyIdThunk.pending,
            getOwnDrinksThunk.pending,
            addOwnDrinkThunk.pending,
            deleteOwnDrinkThunk.pending,
            getFavoriteDrinksThunk.pending,
            addFavoriteDrinkThunk.pending,
            removeFavoriteDrinkThunk.pending,
            getCategoriesThunk.pending,
            getIngredientsThunk.pending,
            getGlassesThunk.pending,
          ].includes(action.type),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          [
            fetchAllDrinks.rejected,
            getPopularThunk.rejected,
            getDrinkbyIdThunk.rejected,
            getOwnDrinksThunk.rejected,
            addOwnDrinkThunk.rejected,
            deleteOwnDrinkThunk.rejected,
            getFavoriteDrinksThunk.rejected,
            addFavoriteDrinkThunk.rejected,
            removeFavoriteDrinkThunk.rejected,
            getCategoriesThunk.rejected,
            getIngredientsThunk.rejected,
            getGlassesThunk.rejected,
          ].includes(action.type),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});
export const drinksReducer = slice.reducer;
