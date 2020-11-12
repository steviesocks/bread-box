import CalculatorActionTypes from './calculator.types';

export const setAmountTo = (value) => ({
    type: CalculatorActionTypes.SET_AMOUNT_TO,
    payload: value
});

export const setAmountFrom = (value) => ({
    type: CalculatorActionTypes.SET_AMOUNT_FROM,
    payload: value
});

export const setUnitTo = (newUnitTo) => ({
    type: CalculatorActionTypes.SET_UNIT_TO,
    payload: newUnitTo
});

export const setUnitFrom = (newUnitFrom) => ({
    type: CalculatorActionTypes.SET_UNIT_FROM,
    payload: newUnitFrom
});

export const setIngredient = (ingredient) => ({
    type: CalculatorActionTypes.SET_INGREDIENT,
    payload: ingredient
});