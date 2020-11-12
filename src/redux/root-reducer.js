import { combineReducers } from 'redux';

import calculatorReducer from './calculator/calculator.reducer';

export default combineReducers({
    calculator: calculatorReducer
});