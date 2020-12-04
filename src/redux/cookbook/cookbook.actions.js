import CookbookActionTypes from './cookbook.types';

export const addRecipe = (recipe) => ({
    type: CookbookActionTypes.ADD_RECIPE,
    payload: recipe
});

export const deleteRecipe = (recipeIndex) => ({
    type: CookbookActionTypes.DELETE_RECIPE,
    payload: recipeIndex
});

export const setRecipesFromFirebase = (recipes) => ({
    type: CookbookActionTypes.SET_RECIPES_FROM_FIREBASE,
    payload: recipes
})

export const resetCookbook = () => ({
    type: CookbookActionTypes.RESET_COOKBOOK
})