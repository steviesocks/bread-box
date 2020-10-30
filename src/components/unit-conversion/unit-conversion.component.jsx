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

    const [unitFrom, setUnitFrom] = useState({name: "Cup", toCups: 1, type: "volume"});
    const [unitTo, setUnitTo] = useState({name: "Teaspoon", toCups: 0.0208333, type: "volume"});
    const [ingredient, setIngredient] = useState(null);
    const [amountFrom, setAmountFrom] = useState(1);
    const [amountTo, setAmountTo] = useState(amountFrom*unitFrom.toCups/unitTo.toCups);
    const [convertDirection, setConvertDirection] = useState("TO")
    const [isMixedType, setIsMixedType] = useState(false);

    const getUnit = (value) => {
        return UNITS_ARRAY.filter(item => item.name === value)
    }

    const roundToTwoDecimals = (number) => (
        +(Math.round(number + "e+2")  + "e-2")
    )

    const handleAutoCompleteChange = (event, value, reason, name) => {
        console.log("C")
        switch (name) {
            case "ingredient-select":
                setIngredient(value)
                break;
            default:
                break;
        }
    }

    const handleInputChange = (event) => {
        console.log("B")
        const { value } = event.target;
        switch (event.target.name) {
            case "unit-from-select":
                const newUnitFrom = getUnit(value)[0];
                if (newUnitFrom.type !== unitFrom.type) {setIsMixedType(!isMixedType)}
                setUnitFrom(newUnitFrom);
                break;
            case "amount-from-input":
                setConvertDirection("TO");
                setAmountFrom(value);
                break;
            case "unit-to-select":
                const newUnitTo = getUnit(value)[0];
                if (newUnitTo.type !== unitTo.type) {setIsMixedType(!isMixedType)}
                setUnitTo(newUnitTo);
                break;
            case "amount-to-input":
                setConvertDirection("FROM");
                setAmountTo(value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log("A")
        console.log(amountTo)
        if (!isMixedType) {
            if (convertDirection === "TO") {
                const conversion = (amountFrom*unitFrom.toCups)/(unitTo.toCups)
                setAmountTo(roundToTwoDecimals(conversion))
            } else {
                const conversion = (amountTo*unitTo.toCups)/(unitFrom.toCups)
                setAmountFrom(roundToTwoDecimals(conversion))
            }
        } else {
            if (ingredient && convertDirection === "TO") {
                const conversion = (amountFrom*unitFrom.toCups/unitTo.toGrams*ingredient.cupsToGrams)
                setAmountTo(roundToTwoDecimals(conversion))
            } else if (ingredient && convertDirection === "FROM") {
                const conversion = (amountTo/ingredient.cupsToGrams*unitFrom.toCups)
                setAmountFrom(roundToTwoDecimals(conversion))
            } else if (!ingredient) {
                setAmountTo(null);
            }
        }
        

        
    }, [ingredient, unitFrom, unitTo, amountFrom, amountTo, convertDirection, isMixedType])
   
    useEffect(()=> {
        console.log("amount to", amountTo)
    }, [amountTo])


    const ref1 = useRef();

    return (
        <Paper className="paper">
            <h3>Unit Conversion</h3>
            <TextField 
                id="amount-from"
                name="amount-from-input"
                variant="outlined" 
                value={amountFrom} 
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
                unitFrom.type !== unitTo.type ? (
                    <Autocomplete
                        id="ingredient-box"
                        ref={ref1}
                        name="ingredient-select"
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
                value={amountTo} 
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