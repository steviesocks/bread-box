import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIngredients } from '../../redux/recipe/recipe.selectors';
import { deleteIngredient } from '../../redux/recipe/recipe.actions'

import {
    Paper,
    List } from '@material-ui/core';

import RecipeItem from '../recipe-item/recipe-item.component';

import useStyles from './recipe.styles.js';

const Recipe = ({ingredients, deleteIngredient}) => {
    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <h2>Recipe</h2>
            <h4>Ingredients</h4>
            <List dense={true}>
                {
                    ingredients.length ? 
                    ingredients.map((item) => {
                        return <RecipeItem 
                                    key={item.key}
                                    keyString={item.key}
                                    name={item.ingredient.name} 
                                    amount={item.amount} 
                                    unit={item.unit.name}
                                    deleteIngredient={deleteIngredient} 
                                />
                    }) :
                    "Let's get cookin'..."
                }
            </List>
        </Paper>
    )
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients
});

const mapDispatchToProps = dispatch => ({
    deleteIngredient: (key) => dispatch(deleteIngredient(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

