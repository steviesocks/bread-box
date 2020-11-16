import CookbookActionTypes from './cookbook.types';

export const addRecipe = (recipe) => ({
    type: CookbookActionTypes.ADD_RECIPE,
    payload: recipe
});