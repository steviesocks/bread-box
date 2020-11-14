import { createSelector } from 'reselect';

const selectRecipe = state => state.recipe;

export const selectIngredients = createSelector(
    [selectRecipe],
    (recipe) => recipe.ingredients
);