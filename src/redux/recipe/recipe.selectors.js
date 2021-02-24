import { createSelector } from 'reselect';

const selectRecipe = state => state.recipe;

export const selectIngredients = createSelector(
    [selectRecipe],
    (recipe) => recipe.ingredients
);

export const selectSteps = createSelector(
    [selectRecipe],
    (recipe) => recipe.steps
);