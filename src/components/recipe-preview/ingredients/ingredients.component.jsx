import React from 'react';

import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

import useStyles from './ingredients.styles';

const Ingredients = ({ ingredients }) => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h6" >Ingredients</Typography>
            <List dense className={classes.ingredientsList}>
              {
                ingredients.map((item, index) => (
                  <ListItem className={classes.listItem} key={index}>
                    <ListItemText
                      primary={`${item.amount} ${item.unit.name.toLowerCase()} ${'-'} ${item.ingredient.name}`}
                    />
                  </ListItem>
                ))
              }
            </List>
          </div>
    )
};

export default Ingredients;