import CookbookActionTypes from './cookbook.types';

export const addRecipe = (recipe) => ({
    type: CookbookActionTypes.ADD_RECIPE,
    payload: recipe
});

export const deleteRecipe = (recipeIndex) => ({
    type: CookbookActionTypes.DELETE_RECIPE,
    payload: recipeIndex
});