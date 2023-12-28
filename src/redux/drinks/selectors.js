import { createSelector } from '@reduxjs/toolkit';

export const selectAllDrinks = createSelector(
  [state => state.drinks.drinks],
  drinks => drinks,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectPopular = createSelector(
  [state => state.drinks.popular],
  popular => popular,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectSearchDrinks = createSelector(
  [state => state.drinks.searchDrinks],
  searchDrinks => searchDrinks,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectDrinkById = createSelector(
  [state => state.drinks.byId],
  byId => byId,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectOwnDrinks = createSelector(
  [state => state.drinks.own],
  own => own,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectFavoriteDrinks = createSelector(
  [state => state.drinks.favorite],
  favorite => favorite,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectCategories = createSelector(
  [state => state.drinks.categories],
  categories => categories,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectIngredients = createSelector(
  [state => state.drinks.ingredients],
  ingredients => ingredients,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectGlasses = createSelector(
  [state => state.drinks.glasses],
  glasses => glasses,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);
export const selectIsLoading = state => state.drinks.isLoading;
export const selectFavPending = state => state.drinks.favPending;
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
