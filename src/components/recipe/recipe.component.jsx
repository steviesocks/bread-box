import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIngredients } from '../../redux/recipe/recipe.selectors';
import { deleteIngredient, setIngredients } from '../../redux/recipe/recipe.actions'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

import {
    Paper,
    List, 
    Button} from '@material-ui/core';

import RecipeItem from '../recipe-item/recipe-item.component';
import SaveRecipe from '../save-recipe/save-recipe.component';

import useStyles from './recipe.styles.js';

const Recipe = ({ingredients, deleteIngredient, setIngredients}) => {
    const classes = useStyles();
    
    const [openSaveRecipe, setOpenSaveRecipe] = useState(false);

    const handleSave = () => {
        setOpenSaveRecipe(true)
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

    return(
        <Paper className={classes.paper}>
            <h2>Recipe</h2>    
            <Button 
                variant="outlined" 
                color="primary" 
                className={classes.button} 
                disabled={ingredients.length ? false : true}
                onClick={handleSave}
            >
                Save
            </Button>
            <SaveRecipe open={openSaveRecipe} setOpen={setOpenSaveRecipe} />
            <h4>Ingredients</h4>
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
        </Paper>
    )
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients
});

const mapDispatchToProps = dispatch => ({
    deleteIngredient: (key) => dispatch(deleteIngredient(key)),
    setIngredients: (ingredients) => dispatch(setIngredients(ingredients))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

