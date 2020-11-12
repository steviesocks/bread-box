import { INGREDIENTS_ARRAY, UNITS_ARRAY } from '../../conversion/conversions';

export const getUnit = (unitName) => {
    return UNITS_ARRAY.filter(item => item.name === unitName)
};

export const unitToBase = (amount, unit) => {
    return amount*unit.toBase
};

export const basicConvert = (amountFrom, unitFrom, unitTo) => {
    return unitToBase(amountFrom, unitFrom)/unitToBase(1, unitTo)
}

export const roundToTwoDecimals = (number) => (
    +(Math.round(number + "e+2")  + "e-2")
)

export const convert = (amountFrom, unitFrom, unitTo, ingredient) => {
    if (isMixedType(unitFrom, unitTo)) {
        if (unitFrom.type === "volume") {
            return basicConvert(amountFrom, unitFrom, unitTo)*ingredient.cupsToGrams
        } else {
            return basicConvert(amountFrom, unitFrom, unitTo)/ingredient.cupsToGrams
        }
    } else {
        return unitToBase(amountFrom, unitFrom)/unitToBase(1, unitTo)
    }
}

export const isMixedType = (unitFrom, unitTo) => {
 return unitFrom.type !== unitTo.type
} 