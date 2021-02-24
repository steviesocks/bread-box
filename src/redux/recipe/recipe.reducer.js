import { RecipeActionTypes } from './recipe.types';
import { UserActionTypes } from '../user/user.types';
import { deleteIngredient, deleteStep } from '../../utils/recipe.utils';
import { createKey } from '../../utils/utils';

const INITIAL_STATE = {
    ingredients: [],
    steps: []
}

const recipeReducer = (state = INITIAL_STATE, action) => {
    const { ingredients, steps } = state;
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
        case RecipeActionTypes.ADD_STEP:
            return {
                ...state,
                steps: [...steps, {
                    id: createKey(),
                    header: action.payload.header,
                    notes: action.payload.notes
                }]
            };
        case RecipeActionTypes.DELETE_STEP:
            return {
                ...state,
                steps: deleteStep(action.payload, steps)
            }
        default:
            return state;
    }
}

export default recipeReducer;
