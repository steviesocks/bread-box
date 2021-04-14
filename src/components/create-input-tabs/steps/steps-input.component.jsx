import React, { useEffect, useRef, useState } from 'react';
import { addStep } from '../../../redux/recipe/recipe.actions';

import {
    TextField,
    Button,
    Typography
} from '@material-ui/core';

import useStyles from './steps-input.styles';
import { connect } from 'react-redux';
import { createKey } from '../../../utils/utils';

const StepsInput = ({ addStep }) => {

    const classes = useStyles();

    const [newStep, setNewStep] = useState({
        header: '',
        notes: '',
        key: createKey(),
    });

    const handleTextInput = (event) => {
        const { name, value } = event.target
        setNewStep(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleKeyDown = (event) => {
        if (event.keyCode !== 13 || event.shiftKey) {
            return;
        } else if (newStep.header.length) {
            handleSubmit(event)
        } else {
            // event.stopPropagation()
            event.preventDefault()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addStep(newStep)
        setNewStep({
            header: '',
            notes: '',
            key: createKey()
        })
    }

    return (
        <div className={classes.stepsInput}>
            <Typography variant="h6">Add Steps</Typography>
            <form onSubmit={handleSubmit} className={classes.stepsForm}>
                <TextField
                    key={`${newStep.key}-header`}
                    name='header'
                    label="Header"
                    fullWidth
                    required
                    autoFocus
                    value={newStep.heading}
                    onChange={handleTextInput} 
                    error={newStep.notes.length && !newStep.header.length}    
                    />
                <TextField
                    key={`${newStep.key}-notes`}
                    name='notes'
                    label="Notes"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows="5"
                    value={newStep.instructions}
                    onChange={handleTextInput}
                    onKeyDown={handleKeyDown}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.addButton}
                    disabled={newStep.header.length ? false : true}
                >
                    Add Step
            </Button>
            </form>
        </div>

    )
};

const mapDispatchToProps = dispatch => ({
    addStep: (stepObject) => dispatch(addStep(stepObject)),
})

export default connect(null, mapDispatchToProps)(StepsInput);