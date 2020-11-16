import { combineReducers } from 'redux';

import calculatorReducer from './calculator/calculator.reducer';
import recipeReducer from './recipe/recipe.reducer';
import cookbookReducer from './cookbook/cookbook.reducer';

export default combineReducers({
    calculator: calculatorReducer,
    recipe: recipeReducer,
    cookbook: cookbookReducer
});