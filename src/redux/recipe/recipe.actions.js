import RecipeActionTypes from './recipe.types';

export const addIngredient = (ingredient) => ({
    type: RecipeActionTypes.ADD_INGREDIENT,
    payload: ingredient
});

export const deleteIngredient = (key) => ({
    type: RecipeActionTypes.DELETE_INGREDIENT,
    payload: key
});

export const setIngredients = (ingredients) => ({
    type: RecipeActionTypes.SET_INGREDIENTS,
    payload: ingredients
});

export const clearIngredients = () => ({
    type: RecipeActionTypes.CLEAR_INGREDIENTS
})