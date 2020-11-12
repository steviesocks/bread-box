import { CalculatorActionTypes } from './calculator.types';

const INITIAL_STATE = {
    unitFrom: {name: "Cup", toBase: 1, type: "volume"},
    unitTo: {name: "Teaspoon", toBase: 0.0208333, type: "volume"},
    ingredient: null,
    amountFrom: 1,
    amountTo: 48.00007680012288
}

const calculatorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CalculatorActionTypes.SET_AMOUNT_TO:
            return {
                ...state,
                amountTo: action.payload
            };
        case CalculatorActionTypes.SET_AMOUNT_FROM:
            return {
                ...state,
                amountFrom: action.payload
            };
        case CalculatorActionTypes.SET_UNIT_TO:
            return {
                ...state,
                unitTo: action.payload
            };
        case CalculatorActionTypes.SET_UNIT_FROM:
            return {
                ...state,
                unitFrom: action.payload
            };
        case CalculatorActionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredient: action.payload
            };
        default:
            return state;
    }
}

export default calculatorReducer;
