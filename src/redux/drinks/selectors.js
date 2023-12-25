import { createSelector } from '@reduxjs/toolkit';

export const selectAllDrinks = createSelector(
  [state => state.drinks.drinks],
  drinks => drinks
);
export const selectPopular = createSelector(
  [state => state.drinks.popular],
  popular => popular
);
export const selectSearchDrinks = createSelector(
  [state => state.drinks.searchDrinks],
  searchDrinks => searchDrinks
);
export const selectDrinkById = createSelector(
  [state => state.drinks.byId],
  byId => byId
);
export const selectOwnDrinks = createSelector(
  [state => state.drinks.own],
  own => own
);
export const selectFavoriteDrinks = createSelector(
  [state => state.drinks.favorite],
  favorite => favorite
);
export const selectCategories = createSelector(
  [state => state.drinks.categories],
  categories => categories
);
export const selectIngredients = createSelector(
  [state => state.drinks.ingredients],
  ingredients => ingredients
);
export const selectGlasses = createSelector(
  [state => state.drinks.glasses],
  glasses => glasses
);
export const selectIsLoading = state => state.drinks.isLoading;
export const selectError = state => state.drinks.error;
export const selectPage = state => state.drinks.page;
export const selectPages = state => state.drinks.pages;
export const selectLimit = state => state.drinks.limit;

export const selectConstantsObj = createSelector(
  [selectCategories, selectIngredients, selectGlasses],
  (glasses, categories, ingredients) => {
    return { glasses, categories, ingredients };
  }
);
