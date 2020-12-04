import { createSelector } from 'reselect';

const selectCookbook = state => state.cookbook;

export const selectCookbookRecipes = createSelector(
    [selectCookbook],
    (cookbook) => cookbook.recipes
);

export const selectCookbookIsFetching = createSelector(
    [selectCookbook],
    (cookbook) => cookbook.isFetching
);