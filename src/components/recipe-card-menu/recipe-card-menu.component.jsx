import React, { useState } from 'react'
import { connect } from 'react-redux';
import { deleteRecipe } from '../../redux/cookbook/cookbook.actions';
import { enqueueSnackbar, closeSnackbar } from '../../redux/notifications/notifications.actions';
import { createKey } from '../../utils/utils';

import {
    Menu,
    MenuItem,
    Button
} from '@material-ui/core'
import ConfirmDelete from '../confirm-delete/confirm-delete.component';



const RecipeCardMenu = ({ anchorEl, setAnchorEl, open, handleCloseMenu, name, index, deleteRecipe }) => {

    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    const handleClickEdit = () => {
        console.log("edit")
        setAnchorEl(null)
    }

    const handleClickDelete = () => {
        setShowConfirmDelete(true)
    }

    const handleConfirmDelete = () => {
        setShowConfirmDelete(false);
        handleCloseMenu();
        deleteRecipe(index)
    }

    const handleCloseDialog = () => {
        setShowConfirmDelete(false);
    };

    const handleCloseAll = () => {
        setShowConfirmDelete(false)
        handleCloseMenu()
    }

    return (
        <div>
            <Menu
                id="recipe-card-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleCloseMenu}
                PaperProps={{
                    style: {
                        width: '20ch',
                    },
                }}
            >
                <MenuItem key="edit" onClick={handleClickEdit}>Edit</MenuItem>
                <MenuItem key="delete" onClick={handleClickDelete}>Delete</MenuItem>
            </Menu>
            <ConfirmDelete 
                open={showConfirmDelete} 
                setOpen={setShowConfirmDelete} 
                name={name} 
                handleClose={handleCloseAll} 
                handleCancel={handleCloseDialog}
                handleDelete={handleConfirmDelete} />  
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteRecipe: (index) => {
        dispatch(deleteRecipe(index))
        dispatch(enqueueSnackbar({
            message: 'Recipe removed from Cookbook',
            options: {
              key: createKey(),
              variant: 'error',
              hideIconVariant: true,
              action: key => (
                <Button onClick={() => dispatch(closeSnackbar(key))}>dismiss me</Button>
              ),
            },
          }))
    }
})

export default connect(null, mapDispatchToProps)(RecipeCardMenu);