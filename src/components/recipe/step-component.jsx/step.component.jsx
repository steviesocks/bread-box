import React from 'react';

import {
    Typography,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete'

import useStyles from './step.styles';


const Step = ({ step, index, deleteStep }) => {

    const classes = useStyles()

    const handleDeleteStep = () => {
        deleteStep(step.id)
    }

    return (
        <ListItem className={classes.step}>
            <ListItemText>
                <Typography variant="h6" className={classes.header}>{`${index + 1}. ${step.header}`}</Typography>
                <p className={classes.p}>{step.notes}</p>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton 
                    edge="end" 
                    aria-label="delete-step"
                    onClick={handleDeleteStep}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default Step;