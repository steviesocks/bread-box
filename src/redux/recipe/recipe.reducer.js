import { RecipeActionTypes } from './recipe.types';
import { UserActionTypes } from '../user/user.types';
import { deleteIngredient } from '../../utils/recipe.utils';

const INITIAL_STATE = {
    ingredients: []
}

const recipeReducer = (state = INITIAL_STATE, action) => {
    const { ingredients } = state;
    switch (action.type) {
        case RecipeActionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...ingredients, action.payload]
            };
        case RecipeActionTypes.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: deleteIngredient(action.payload, ingredients)
            };
        case RecipeActionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            };
        case RecipeActionTypes.CLEAR_INGREDIENTS:
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                ingredients: []
            };
        default:
            return state;
    }
}

export default recipeReducer;
