import { CookbookActionTypes } from './cookbook.types';
import { UserActionTypes } from '../user/user.types';
import { INITIAL_STATE as initialState } from './initial-state';
import { deleteRecipe } from '../../utils/cookbook.utils';

const INITIAL_STATE = {
    recipes: initialState,
    isFetching: false
}

const cookbookReducer = (state = INITIAL_STATE, action) => {
    const { recipes } = state;
    switch (action.type) {
        case CookbookActionTypes.ADD_RECIPE:
            return {
                ...state,
                recipes: [...recipes, action.payload]
            };
        case CookbookActionTypes.DELETE_RECIPE:
            return {
                ...state,
                recipes: deleteRecipe(action.payload, recipes)
            }
        case CookbookActionTypes.SET_RECIPES_FROM_FIREBASE:
            return {
                ...state,
                recipes: action.payload,
                isFetching: false
            }
        case CookbookActionTypes.RESET_COOKBOOK:
            return INITIAL_STATE;
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                isFetching: true
            }
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default cookbookReducer;
