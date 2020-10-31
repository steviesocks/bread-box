import React, { useEffect, useRef, useState } from 'react';

import { INGREDIENTS_ARRAY, UNITS_ARRAY } from '../../conversion/conversions';

import {
    Paper,
    TextField,
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import './unit-conversion.styles.scss';

const UnitConversion = () => {

    const [unitFrom, setUnitFrom] = useState({name: "Cup", toBase: 1, type: "volume"});
    const [unitTo, setUnitTo] = useState({name: "Teaspoon", toBase: 0.0208333, type: "volume"});
    const [ingredient, setIngredient] = useState(null);
    const [amountFrom, setAmountFrom] = useState(1);
    const [amountTo, setAmountTo] = useState(48.00007680012288);

    const getUnit = (value) => {
        return UNITS_ARRAY.filter(item => item.name === value)
    }

    const unitToBase = (amount, unit) => {
        return amount*unit.toBase
    }

    const basicConvert = (amountFrom, unitFrom, unitTo) => {
        return unitToBase(amountFrom, unitFrom)/unitToBase(1, unitTo)
    }

    const roundToTwoDecimals = (number) => (
        +(Math.round(number + "e+2")  + "e-2")
    )

    const convert = (amountFrom, unitFrom, unitTo) => {
        console.log("converter")
        if (isMixedType()) {
            if (unitFrom.type === "volume") {
                return basicConvert(amountFrom, unitFrom, unitTo)*ingredient.cupsToGrams
            } else {
                return basicConvert(amountFrom, unitFrom, unitTo)/ingredient.cupsToGrams
            }
        } else {
            return unitToBase(amountFrom, unitFrom)/unitToBase(1, unitTo)
        }
    }
   
   const isMixedType = () => {
     return unitFrom.type !== unitTo.type
   } 

    const handleAutoCompleteChange = (event, value, reason, name) => {
        switch (name) {
            case "ingredient-select":
                setIngredient(value)
                break;
            default:
                break;
        }
        console.log(reason)
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        switch (event.target.name) {
            case "unit-from-select":
                const newUnitFrom = getUnit(value)[0];
                setUnitFrom(newUnitFrom);
                break;
            case "amount-from-input":
                setAmountFrom(value);
                break;
            case "unit-to-select":
                const newUnitTo = getUnit(value)[0];
                setUnitTo(newUnitTo);
                break;
            case "amount-to-input":
                setAmountTo(value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log("A")
        console.log(amountFrom, amountTo, unitFrom, unitTo)
        const newAmount = convert(amountFrom, unitFrom, unitTo)
        setAmountTo(newAmount)
    }, [amountFrom]);

    useEffect(() => {
        console.log("B")
        console.log(amountFrom, amountTo, unitFrom, unitTo)

        const newAmount = convert(amountTo, unitTo, unitFrom)
        setAmountFrom(newAmount)
    }, [amountTo]);

    useEffect(() => {
        console.log("C")
        console.log(amountFrom, unitFrom, unitTo)
        console.log(ingredient)
        if (isMixedType()) {
            if (ingredient === null) {
                console.log("needs ingredient")
            } else {
                const newAmount = convert(amountFrom, unitFrom, unitTo)
                setAmountTo(newAmount)
            }
        } else {
            const newAmount = convert(amountFrom, unitFrom, unitTo)
            setAmountTo(newAmount)
        }
    }, [unitFrom, unitTo]);

    useEffect(() => {
        if (ingredient !== null) {
            const newAmount = convert(amountFrom, unitFrom, unitTo)
            setAmountTo(newAmount)
        } else {
            console.log("no ingredient")
        }
    }, [ingredient])

    const ref1 = useRef();

    return (
        <Paper className="paper">
            <h3>Unit Conversion</h3>
            <TextField 
                id="amount-from"
                name="amount-from-input"
                variant="outlined" 
                value={roundToTwoDecimals(amountFrom)} 
                type="number"
                inputProps={{
                                step: "0.25",
                                min: "0"
                            }} 
                onChange={handleInputChange}
            />
            <FormControl variant="outlined" className="unit-select">
                <Select
                id="unit-from"
                value={unitFrom.name}
                onChange={handleInputChange}
                name="unit-from-select"
                >
                {
                    UNITS_ARRAY.map(unit => (<MenuItem value={unit.name}>{unit.name}</MenuItem>
                    ))
                }
                
                </Select>
            </FormControl>
            {
                isMixedType() ? (
                    <Autocomplete
                        id="ingredient-box"
                        ref={ref1}
                        name="ingredient-select"
                        value={ingredient}
                        options={INGREDIENTS_ARRAY}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Ingredient" variant="outlined" />}
                        onChange={(event, value, reason) => {
                            const name = ref1.current.getAttribute("name");
                            handleAutoCompleteChange(event, value, reason, name)
                        }}
                    />
                ) : null
            }
            <TextField 
                id="amount-to"
                name="amount-to-input"
                variant="outlined" 
                value={roundToTwoDecimals(amountTo)} 
                type="number"
                inputProps={{
                                step: "0.25",
                                min: "0"
                            }} 
                onChange={handleInputChange}
            />
            <FormControl variant="outlined" className="unit-select">
                <Select
                id="unit-to"
                value={unitTo.name}
                onChange={handleInputChange}
                name="unit-to-select"
                >
                {
                    UNITS_ARRAY.map(unit => (<MenuItem value={unit.name}>{unit.name}</MenuItem>
                    ))
                }
                
                </Select>
            </FormControl>
        </Paper>
    )
}

export default UnitConversion;