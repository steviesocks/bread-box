import { createSelector } from 'reselect';

const selectCalculator = state => state.calculator;

export const selectAmountTo = createSelector(
    [selectCalculator],
    (calculator) => calculator.amountTo
);

export const selectAmountFrom = createSelector(
    [selectCalculator],
    (calculator) => calculator.amountFrom
);

export const selectIngredient = createSelector(
    [selectCalculator],
    (calculator) => calculator.ingredient
);

export const selectUnitTo = createSelector(
    [selectCalculator],
    (calculator) => calculator.unitTo
);

export const selectUnitFrom = createSelector(
    [selectCalculator],
    (calculator) => calculator.unitFrom
);