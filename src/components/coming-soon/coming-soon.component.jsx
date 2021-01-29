import React, { useState } from 'react'
import { connect } from 'react-redux';
import { deleteRecipe } from '../../redux/cookbook/cookbook.actions';
import { enqueueSnackbar, closeSnackbar } from '../../redux/notifications/notifications.actions';
import { createKey } from '../../utils/utils';

import {
    Menu,
    MenuItem,
    Button,
    Typography
} from '@material-ui/core'
import ConfirmDelete from '../confirm-delete/confirm-delete.component';



const ComingSoonDialog = ({ anchorEl, setAnchorEl, open, handleClose }) => {

    return (
        <div>
            <Menu
                id="coming-soon-dialog"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '20ch',
                    },
                }}
            >
                <Typography>Coming soon!</Typography>
            </Menu>
        </div>
    )
};


export default ComingSoonDialog;