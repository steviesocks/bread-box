import { CookbookActionTypes } from './cookbook.types';
import { INITIAL_STATE as initialState } from './initial-state';
import { deleteRecipe } from '../../utils/cookbook.utils';

const INITIAL_STATE = {
    recipes: initialState
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
        default:
            return state;
    }
}

export default cookbookReducer;
