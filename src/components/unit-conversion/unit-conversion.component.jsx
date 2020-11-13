import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getUnit,
    roundToTwoDecimals,
    convert,
    isMixedType } from '../../redux/calculator/calculator.utils';

import { setAmountTo, setAmountFrom, setUnitTo, setUnitFrom, setIngredient } from '../../redux/calculator/calculator.actions';

import { selectAmountFrom,
    selectAmountTo,
    selectIngredient,
    selectUnitFrom,
    selectUnitTo } from '../../redux/calculator/calculator.selectors';

import { INGREDIENTS_ARRAY, UNITS_ARRAY } from '../../conversion/conversions';

import {
    Paper,
    TextField,
    FormControl,
    Select,
    MenuItem,
    Container,
    Tooltip,
    Fab,
    List
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/Add';
import RecipeItem from '../recipe-item/recipe-item.component';

import useStyles from './unit-conversion.styles.js';

const UnitConversion = ({amountFrom, setAmountFrom, amountTo, setAmountTo, unitTo, setUnitTo, unitFrom, setUnitFrom, ingredient, setIngredient}) => {
    const classes = useStyles();
    const loaded = useRef(false);
    const lastChange = useRef("AMOUNT_FROM");

    const [recipe, setRecipe] = useState([]);

    const addIngredientToRecipe = (amountTo, ingredient) => {
        setRecipe([...recipe, {name: ingredient.name, amount: amountTo}])
    }

    const handleAutoCompleteChange = (event, value, reason, name) => {
        switch (name) {
            case "ingredient-select":
                setIngredient(value);
                lastChange.current = "INGREDIENT";
                break;
            default:
                break;
        }
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        switch (event.target.name) {
            case "unit-from-select":
                const newUnitFrom = getUnit(value)[0];
                setUnitFrom(newUnitFrom);
                lastChange.current = "UNIT_FROM";
                break;
            case "amount-from-input":
                setAmountFrom(Number(value));
                lastChange.current = "AMOUNT_FROM";
                break;
            case "unit-to-select":
                const newUnitTo = getUnit(value)[0];
                setUnitTo(newUnitTo);
                lastChange.current = "UNIT_TO";
                break;
            case "amount-to-input":
                setAmountTo(Number(value));
                lastChange.current = "AMOUNT_TO";
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (loaded.current) {
            switch (lastChange.current) {
                case "AMOUNT_FROM": 
                    {
                        const newAmount = convert(amountFrom, unitFrom, unitTo, ingredient);
                        setAmountTo(newAmount);
                        lastChange.current = "AMOUNT_TO";
                    }
                    break;
                case "AMOUNT_TO":
                    {
                        const newAmount = convert(amountTo, unitTo, unitFrom, ingredient);
                        setAmountFrom(newAmount);
                        lastChange.current = "AMOUNT_FROM";
                    }
                    break;
                case "UNIT_FROM" :
                case "UNIT_TO":
                    if (isMixedType(unitFrom, unitTo)) {
                        if (ingredient === null) {
                            console.log("needs ingredient");
                        } else {
                            const newAmount = convert(amountFrom, unitFrom, unitTo, ingredient);
                            setAmountTo(newAmount);
                            lastChange.current = "AMOUNT_TO";
                        }
                    } else {
                        const newAmount = convert(amountFrom, unitFrom, unitTo, ingredient);
                        setAmountTo(newAmount);
                        lastChange.current = "AMOUNT_TO";
                    }
                    break;
                case "INGREDIENT":
                    if (ingredient !== null) {
                        const newAmount = convert(amountFrom, unitFrom, unitTo, ingredient);
                        setAmountTo(newAmount);
                        lastChange.current = "AMOUNT_TO";
                    } else {
                        console.log("no ingredient")
                    }
                    break;    
                default:
                    break;
            }

        } else {
            loaded.current = true;
        }
    }, [amountFrom, amountTo, ingredient, setAmountFrom, setAmountTo, unitFrom, unitTo])

    // useEffect(() => {
    //     console.log("recipe", recipe)
    // }, [recipe])

    const ref1 = useRef();

    return (
        <Container>
            <Paper className={classes.paper}>
                <h2>Unit Conversion</h2>
                <Container className={classes.calculator}>
                    <Container className={classes.inputs}>
                        <TextField 
                            className={classes.amount}
                            name="amount-from-input"
                            variant="outlined" 
                            value={roundToTwoDecimals(amountFrom).toString()} 
                            type="number"
                            inputProps={{
                                            className: classes.amountInput,
                                            step: "0.25",
                                            min: "0"
                                        }} 
                            onChange={handleInputChange}
                            disabled={isMixedType(unitFrom, unitTo) && ingredient === null ? true : false}
                        />
                        <FormControl variant="outlined" className={classes.unit}>
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
                        </Container>
                        <Container className={classes.equals}>=</Container>
                        <Container className={classes.inputs}>
                        <TextField 
                            className={classes.amount}
                            name="amount-to-input"
                            variant="outlined" 
                            value={roundToTwoDecimals(amountTo).toString()} 
                            type="number"
                            inputProps={{
                                            className: classes.amountInput,
                                            step: "0.25",
                                            min: "0"
                                        }} 
                            onChange={handleInputChange}
                            disabled={isMixedType(unitFrom, unitTo) && ingredient === null ? true : false}
                        />
                        <FormControl variant="outlined" className={classes.unit}>
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
                    </Container>
                    
                </Container>
                <Container className={classes.ingredient}>
                    {
                        isMixedType(unitFrom, unitTo) ? (
                            <Autocomplete
                                ref={ref1}
                                name="ingredient-select"
                                value={ingredient}
                                options={INGREDIENTS_ARRAY}
                                getOptionLabel={(option) => option.name}
                                // style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Ingredient" variant="outlined" error={ingredient === null ? true : false}/>}
                                onChange={(event, value, reason) => {
                                    const name = ref1.current.getAttribute("name");
                                    handleAutoCompleteChange(event, value, reason, name)
                                }}
                            />
                        ) : null
                    }
                </Container>
                <Tooltip title="Add to recipe" aria-label="add to recipe">
                    <Fab color="primary" className={classes.fab}>
                        <AddIcon onClick={() => addIngredientToRecipe(amountTo, ingredient)}/>
                    </Fab>
                </Tooltip>
            </Paper>
            <Paper className={classes.paper}>
                <List dense={true}>
                    {
                        recipe.map((item) => {
                            return <RecipeItem key={item.name} name={item.name} amount={item.amount} />
                        })
                    }
                </List>
            </Paper>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    amountTo: selectAmountTo,
    amountFrom: selectAmountFrom,
    ingredient: selectIngredient,
    unitTo: selectUnitTo,
    unitFrom: selectUnitFrom
})

const mapDispatchToProps = dispatch => ({
    setAmountTo: (value) => dispatch(setAmountTo(value)),
    setAmountFrom: (value) => dispatch(setAmountFrom(value)),
    setUnitTo: (value) => dispatch(setUnitTo(value)),
    setUnitFrom: (value) => dispatch(setUnitFrom(value)),
    setIngredient: (value) => dispatch(setIngredient(value))
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(UnitConversion);