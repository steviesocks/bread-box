import React from 'react';
import { ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
    } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const RecipeItem = ({keyString, name, amount, unit, deleteIngredient}) => (
    <ListItem>
        <ListItemText
        primary={name}
        secondary={`${amount} ${unit.toLowerCase()}`}
        />
        <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => {deleteIngredient(keyString)}}>
            <DeleteIcon />
        </IconButton>
        </ListItemSecondaryAction>
    </ListItem>        
);

export default RecipeItem;