import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIngredients } from '../../redux/recipe/recipe.selectors';
import { addRecipe } from '../../redux/cookbook/cookbook.actions';
import { enqueueSnackbar, closeSnackbar } from '../../redux/notifications/notifications.actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Recipe } from '../../utils/recipe.utils';
import { createKey } from '../../utils/utils';

const SaveRecipe = ({ open, setOpen, ingredients, addRecipe }) => {

    const [recipeInfo, setRecipeInfo] = useState({name: "", link: "", notes: "", imageUrl: ""})

    const handleChange = (event) => {
        const { value, name } = event.target;
        setRecipeInfo(prevState => ({...prevState, [name]: value}));
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (event) => {
        event.preventDefault();
        const { name, link, notes, imageUrl } = recipeInfo;
        const newRecipe = new Recipe(name, link, imageUrl, notes, ingredients)
        addRecipe(newRecipe)
        setOpen(false);
    }

    return (
            <Dialog 
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title" 
                fullWidth={true}
                maxWidth="sm"
            >
                <DialogTitle id="form-dialog-title">Save recipe</DialogTitle>
                <form onSubmit={handleSave}>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="name"
                        label="Recipe Name"
                        value={recipeInfo.name}
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="link"
                        label="Link"
                        type="url"
                        value={recipeInfo.link}
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="imageUrl"
                        label="Image link"
                        type="url"
                        value={recipeInfo.imageUrl}
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        name="notes"
                        label="Notes"
                        multiline
                        rows={3}
                        rowsMax={4}
                        value={recipeInfo.notes}
                        fullWidth
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="default">
                        Cancel
                    </Button>
                    <Button color="primary" type="submit">
                        Save
                    </Button>
                </DialogActions>
                </form>
            </Dialog>
    );
};

const mapStateToProps = createStructuredSelector({
    ingredients: selectIngredients
});

const mapDispatchToProps = dispatch => ({
    addRecipe: (recipe) => {
        dispatch(addRecipe(recipe))
        dispatch(enqueueSnackbar({
            message: 'Recipe added to Cookbook',
            options: {
              key: createKey(),
              variant: 'success',
              action: key => (
                <Button onClick={() => dispatch(closeSnackbar(key))}>dismiss me</Button>
              ),
            },
          }))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveRecipe);