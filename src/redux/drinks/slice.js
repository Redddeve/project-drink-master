import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
  setSearchPage,
} from './operations';

const initialState = {
  drinks: [],
  byId: [],
  favorite: [],
  pages: 1,
  page: 1,
  own: [],
  popular: [],
  categories: [],
  glasses: [],
  ingredients: [],
  searchDrinks: [],
  favPending: false,
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'drinks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(setSearchPage.fulfilled, (state, { payload }) => {
        state.page = payload;
      })
      .addCase(fetchAllDrinks.fulfilled, (state, { payload }) => {
        state.drinks = payload;
        state.isLoading = false;
      })
      .addCase(getPopularThunk.fulfilled, (state, { payload }) => {
        state.popular = payload;
        state.isLoading = false;
      })
      .addCase(searchDrinksThunk.fulfilled, (state, { payload }) => {
        state.searchDrinks = payload.result;
        state.pages = payload.pages;
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
        state.pages = payload.pages;
        state.own = payload.cocktails;
        state.isLoading = false;
      })
      .addCase(addOwnDrinkThunk.fulfilled, (state, { payload }) => {
        state.own.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteOwnDrinkThunk.fulfilled, (state, { payload }) => {
        state.own = state.own.filter(({ _id }) => _id !== payload);
        state.isLoading = false;
      })
      .addCase(getFavoriteDrinksThunk.fulfilled, (state, { payload }) => {
        state.pages = payload.pages;
        state.favorite = payload.favorites;
        state.isLoading = false;
      })
      .addCase(addFavoriteDrinkThunk.fulfilled, (state, { payload }) => {
        state.favorite.push(payload.drink);
        state.favPending = false;
      })
      .addCase(removeFavoriteDrinkThunk.fulfilled, (state, { payload }) => {
        state.favorite = state.favorite.filter(({ _id }) => _id !== payload);
        state.favPending = false;
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
        isAnyOf(
          addFavoriteDrinkThunk.pending,
          removeFavoriteDrinkThunk.pending
        ),
        state => {
          state.favPending = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addFavoriteDrinkThunk.rejected,
          removeFavoriteDrinkThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.favPending = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllDrinks.pending,
          getPopularThunk.pending,
          searchDrinksThunk.pending,
          getDrinkbyIdThunk.pending,
          getOwnDrinksThunk.pending,
          addOwnDrinkThunk.pending,
          deleteOwnDrinkThunk.pending,
          getFavoriteDrinksThunk.pending,
          getCategoriesThunk.pending,
          getIngredientsThunk.pending,
          getGlassesThunk.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllDrinks.rejected,
          getPopularThunk.rejected,
          getDrinkbyIdThunk.rejected,
          getOwnDrinksThunk.rejected,
          addOwnDrinkThunk.rejected,
          deleteOwnDrinkThunk.rejected,
          getFavoriteDrinksThunk.rejected,
          getCategoriesThunk.rejected,
          getIngredientsThunk.rejected,
          getGlassesThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});
export const drinksReducer = slice.reducer;
