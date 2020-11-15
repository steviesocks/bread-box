import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { addIngredient } from '../../redux/recipe/recipe.actions';
import { createKey } from '../../utils/utils';

import {
    Paper,
    TextField,
    FormControl,
    Select,
    MenuItem,
    Container,
    Tooltip,
    Fab } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/Add';

import { UNITS_ARRAY, INGREDIENTS_ARRAY } from '../../conversion/conversions';
import { getUnit } from '../../utils/calculator.utils';

import useStyles from './ingredient.styles';

const Ingredient = ({addIngredient}) => {

    const autocompleteRef = useRef();

    const classes = useStyles();

    const [amount, setAmount] = useState(1);
    const [unit, setUnit] = useState({name: "Cup", toBase: 1, type: "volume"});
    const [ingredient, setIngredient] = useState(null);

    const handleAutoCompleteChange = (event, value, reason, name) => {
        switch (name) {
            case "ingredient-select":
                setIngredient(value);
                break;
            default:
                break;
        }
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        switch (event.target.name) {
            case "unit-select":
                const newUnit = getUnit(value)[0];
                setUnit(newUnit);
                break;
            case "amount-input":
                setAmount(Number(value));
                break;
            default:
                break;
        }
    }

    const addIngredientToRecipe = () => {
        const newIngredient = {key: createKey(), ingredient, amount, unit};
        addIngredient(newIngredient);
    }

    return (
        <Paper className={classes.paper}>
            <h2>Pick Ingredients</h2>
            <TextField 
                className={classes.amount}
                name="amount-input"
                variant="outlined" 
                value={amount.toString()} 
                type="number"
                inputProps={{
                                className: classes.amountInput,
                                step: "0.25",
                                min: "0"
                            }} 
                onChange={handleInputChange}
            />
            <FormControl variant="outlined" className={classes.unit}>
                <Select
                id="unit-from"
                value={unit.name}
                onChange={handleInputChange}
                name="unit-select"
                >
                {
                    UNITS_ARRAY.map(unit => (<MenuItem key={unit.name} value={unit.name}>{unit.name}</MenuItem>
                    ))
                }
                
                </Select>
            </FormControl>
            <Autocomplete
                className={classes.ingredientSelect}
                ref={autocompleteRef}
                name="ingredient-select"
                value={ingredient}
                options={INGREDIENTS_ARRAY}
                getOptionLabel={(option) => option.name}
                // style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Ingredient" variant="outlined" error={ingredient === null ? true : false}/>}
                onChange={(event, value, reason) => {
                    const name = autocompleteRef.current.getAttribute("name");
                    handleAutoCompleteChange(event, value, reason, name)
                }}
            />
            <Container className={classes.addButton}>
                <Tooltip title="Add to recipe" aria-label="add to recipe">
                    <Fab color="primary" className={classes.fab}>
                        <AddIcon onClick={() => addIngredientToRecipe()}/>
                    </Fab>
                </Tooltip> 
            </Container> 
        </Paper>
    )

}

const mapDispatchToProps = dispatch => ({
    addIngredient: (ingredient, amount, unit) => dispatch(addIngredient(ingredient, amount, unit))
});

export default connect(null, mapDispatchToProps)(Ingredient);