import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIngredients } from '../../redux/recipe/recipe.selectors';
import { setIngredients } from '../../redux/recipe/recipe.actions';

import { getUnit } from '../../utils/calculator.utils'
import { createKey } from '../../utils/utils';
import { UNITS_ARRAY } from '../../conversion/conversions';

import { Button, IconButton, FormControl, Select, MenuItem  } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './recipe-item-edit.styles';

export const RecipeItemEdit = ({ ingredients, setIngredients, index }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(ingredients[index].amount)
    const [unit, setUnit] = useState(ingredients[index].unit)
    const ingredient = ingredients[index]

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        const copiedIngredients = [...ingredients]

        copiedIngredients.splice(index,1,{
            ...ingredient,
            amount,
            unit
        })
        setIngredients(copiedIngredients)
        setOpen(false);
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        switch (event.target.name) {
            case "unit-select":
                const newUnitFrom = getUnit(value)[0];
                setUnit(newUnitFrom);
                break;
            case "amount-input":
                setAmount(Number(value));
                break;
            default:
                break;
            } 
    }

    return (
        <div className={classes.edit}>
            <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{ingredient.ingredient.name}</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>
                            text here
                        </DialogContentText> */}
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
                            UNITS_ARRAY.map(unit => (<MenuItem key={createKey()} value={unit.name}>{unit.name}</MenuItem>
                            ))
                        }
                        
                        </Select>
                    </FormControl>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="default">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
  }

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients
});

const mapDispatchToProps = dispatch => ({
    setIngredients: (newIngredients) => dispatch(setIngredients(newIngredients)),

  });

  export default connect(mapStateToProps, mapDispatchToProps)(RecipeItemEdit);