import {createSlice, isAnyOf} from '@reduxjs/toolkit';
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
    pages: 1,
    own: [],
    popular: [],
    categories: [],
    glasses: [],
    ingredients: [],
    searchDrinks: [],
    isLoading: false,
    error: null,
};

export const slice = createSlice({
    name: 'drinks',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchAllDrinks.fulfilled, (state, {payload}) => {
                state.drinks = payload;
                state.isLoading = false;
            })
            .addCase(getPopularThunk.fulfilled, (state, {payload}) => {
                state.popular = payload;
                state.isLoading = false;
            })
            .addCase(searchDrinksThunk.fulfilled, (state, {payload}) => {
                state.searchDrinks = payload;
                state.isLoading = false;
            })
            .addCase(searchDrinksThunk.rejected, state => {
                state.searchDrinks = [];
                state.isLoading = false;
            })
            .addCase(getDrinkbyIdThunk.fulfilled, (state, {payload}) => {
                state.byId = payload;
                state.isLoading = false;
            })
            .addCase(getOwnDrinksThunk.fulfilled, (state, {payload}) => {
                state.own = payload;
                state.isLoading = false;
            })
            .addCase(addOwnDrinkThunk.fulfilled, (state, {payload}) => {
                state.own.push(payload);
                state.isLoading = false;
            })
            .addCase(deleteOwnDrinkThunk.fulfilled, (state, {payload}) => {
                state.own = state.own.filter(({_id}) => _id !== payload._id);
            })
            .addCase(getFavoriteDrinksThunk.fulfilled, (state, {payload}) => {
                state.pages = payload.pages;
                state.favorite = payload.favorites;
                state.isLoading = false;
            })
            .addCase(addFavoriteDrinkThunk.fulfilled, (state, {payload}) => {
                state.favorite.push(payload.drink);
                state.isLoading = false;
            })
            .addCase(removeFavoriteDrinkThunk.fulfilled, (state, {payload}) => {
                state.favorite = state.favorite.filter(({_id}) => _id !== payload);
                state.isLoading = false;
            })
            .addCase(getCategoriesThunk.fulfilled, (state, {payload}) => {
                state.categories = payload.categories;
            })
            .addCase(getIngredientsThunk.fulfilled, (state, {payload}) => {
                state.ingredients = payload;
            })
            .addCase(getGlassesThunk.fulfilled, (state, {payload}) => {
                state.glasses = payload.glasses;
            })
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
                    addFavoriteDrinkThunk.pending,
                    removeFavoriteDrinkThunk.pending,
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
                    addFavoriteDrinkThunk.rejected,
                    removeFavoriteDrinkThunk.rejected,
                    getCategoriesThunk.rejected,
                    getIngredientsThunk.rejected,
                    getGlassesThunk.rejected
                ),
                (state, {payload}) => {
                    state.error = payload;
                    state.isLoading = false;
                }
            );
    },
});
export const drinksReducer = slice.reducer;
