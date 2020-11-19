import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import useStyles from './confirm-delete.styles';

const ConfirmDelete = ({open, name, handleClose, handleCancel, handleDelete}) => {

    const classes = useStyles();

    return (
        <Dialog
            PaperProps={{className: classes.paper}}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{`Delete ${name}?`}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You can't undo this.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary" autoFocus>
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="secondary">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDelete;