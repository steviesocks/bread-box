import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIngredients, selectSteps } from '../../redux/recipe/recipe.selectors';
import { deleteIngredient, setIngredients, clearIngredients, addStep, deleteStep } from '../../redux/recipe/recipe.actions'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

import {
    Paper,
    List,
    Button,
    Typography,
} from '@material-ui/core';

import RecipeItem from '../recipe-item/recipe-item.component';
import SaveRecipe from '../save-recipe/save-recipe.component';

import useStyles from './recipe.styles.js';
import Step from './step-component.jsx/step.component';

const Recipe = ({ ingredients, steps, deleteIngredient, setIngredients, clearIngredients, addStep, deleteStep }) => {
    const classes = useStyles();

    const [openSaveRecipe, setOpenSaveRecipe] = useState(false);

    const handleSave = () => {
        setOpenSaveRecipe(true)
    }

    const handleClear = () => {
        clearIngredients()
    }

    const moveCardHandler = (dragIndex, hoverIndex) => {
        console.log("ingredients", ingredients)
        const dragItem = ingredients[dragIndex];
        console.log("dragItem", dragItem)

        if (dragItem) {
            const copiedStateArray = [...ingredients];

            const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);

            copiedStateArray.splice(dragIndex, 1, prevItem[0]);

            setIngredients(copiedStateArray);
        }
    };

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6">Recipe</Typography>
            <Button
                variant="text"
                color="primary"
                className={classes.saveButton}
                disabled={ingredients.length ? false : true}
                onClick={handleSave}
            >
                Save
            </Button>
            <SaveRecipe open={openSaveRecipe} setOpen={setOpenSaveRecipe} />
            <h4>Ingredients</h4>
            <div className={classes.clearButton} >
                <Button
                    variant="text"
                    color="secondary"
                    disabled={ingredients.length ? false : true}
                    onClick={handleClear}
                >
                    Clear
                </Button>
            </div>

            <DndProvider backend={HTML5Backend}>
                <List dense={true}>
                    {
                        ingredients.length ?
                            ingredients.map((item, index) => {
                                return <RecipeItem
                                    key={item.key}
                                    index={index}
                                    keyString={item.key}
                                    name={item.ingredient.name}
                                    amount={item.amount}
                                    unit={item.unit.name}
                                    deleteIngredient={deleteIngredient}
                                    moveCardHandler={moveCardHandler}
                                />
                            }) :
                            "Let's get cookin'..."
                    }
                </List>
            </DndProvider>
            <h4>Steps</h4>
            <List>
                {
                    steps.map((step, index) => (
                        <Step key={step.id} step={step} index={index} deleteStep={deleteStep} />
                    ))
                }
            </List>

        </Paper>
    )
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients,
    steps: selectSteps
});

const mapDispatchToProps = dispatch => ({
    deleteIngredient: (key) => dispatch(deleteIngredient(key)),
    setIngredients: (ingredients) => dispatch(setIngredients(ingredients)),
    clearIngredients: () => dispatch(clearIngredients()),
    deleteStep: (id) => dispatch(deleteStep(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

