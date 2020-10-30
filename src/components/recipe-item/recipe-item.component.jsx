import React from 'react';
import { ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
    } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const RecipeItem = ({name, amount}) => {

    return (
            <ListItem>
                <ListItemText
                primary={`${name}: ${amount}g`}
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>        
    )
};

export default RecipeItem;