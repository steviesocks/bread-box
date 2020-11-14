import { combineReducers } from 'redux';

import calculatorReducer from './calculator/calculator.reducer';
import recipeReducer from './recipe/recipe.reducer';

export default combineReducers({
    calculator: calculatorReducer,
    recipe: recipeReducer
});