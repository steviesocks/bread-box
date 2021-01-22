import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { emailSignInStart, signUpStart } from '../../redux/user/user.actions';
import { selectIsSigningIn, selectOpen, selectFormState, selectError, selectIsRegistered } from '../../redux/sign-in/sign-in.selectors';
import { closeSignIn, changeForm, passwordError, toggleRegistered } from '../../redux/sign-in/sign-in.actions';


import {
    Dialog,
    DialogTitle,
    TextField,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button,
    CircularProgress,
    IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

import useStyles from './sign-in.styles';

const SignIn = ({ open, closeSignIn, emailSignInStart, signUpStart, isSigningIn, changeForm, user, error, passwordError, isRegistered, toggleRegistered }) => {

    const classes = useStyles()


    const handleRegistered = () => {
        toggleRegistered()
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        if (isRegistered) {
            emailSignInStart(user)
        } else {
            if (user.password === user.confirmPassword) {
                signUpStart(user)
            } else {
                passwordError()
            }
        }
    }

    const handleClose = () => {
        closeSignIn()
    }

    console.log("error?", error)


    return (
        <Dialog
            PaperProps={{ className: classes.paper }}
            open={open}
            onClose={handleClose}
        >
            <div className={classes.titleBar}>
                <DialogTitle className={classes.title}>
                    {isRegistered ? "sign in" : "create an account"}
                </DialogTitle>
                <IconButton className={classes.closeButton}  edge="end" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </div>

            <form onSubmit={handleSignIn}>
                <DialogContent>
                    <DialogContentText>
                        {
                            isRegistered ?
                                "Sign in to save and access recipes" :
                                "Sign up to save and access recipes"
                        }
                    </DialogContentText>
                    {
                        !isRegistered ?
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                label="Display name"
                                name="displayName"
                                type="text"
                                fullWidth
                                value={user.displayName}
                                onChange={changeForm}
                            /> :
                            null
                    }
                    <TextField
                        autoFocus={isRegistered ? true : false}
                        required
                        margin="dense"
                        label="Email"
                        type="email"
                        name="email"
                        fullWidth
                        value={user.email}
                        onChange={changeForm}
                    />
                    <TextField
                        required
                        margin="dense"
                        label="Password"
                        type="password"
                        name="password"
                        fullWidth
                        value={user.password}
                        onChange={changeForm}
                    />
                    {
                        !isRegistered ?
                            <TextField
                                required
                                margin="dense"
                                label="Confirm password"
                                type="password"
                                name="confirmPassword"
                                fullWidth
                                value={user.confirmPassword}
                                onChange={changeForm}
                            /> :
                            null
                    }
                    {
                        error && <h4 className={classes.error}>{error}</h4> 
                    }
                </DialogContent>
                <DialogActions>
                    <Button className={classes.button}
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        {isSigningIn ? <CircularProgress className={classes.spinner} size={24} /> : (isRegistered ? "Sign In" : "Sign Up")}
                    </Button>
                </DialogActions>
                <DialogActions>
                    <Button onClick={handleRegistered} color="default">
                        {
                            isRegistered ?
                                "Create a new account..." :
                                "I already have an account..."
                        }
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
};

const mapStateToProps = createStructuredSelector({
    isSigningIn: selectIsSigningIn,
    error: selectError,
    open: selectOpen,
    user: selectFormState,
    isRegistered: selectIsRegistered
})

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (user) => dispatch(emailSignInStart(user)),
    signUpStart: (user) => dispatch(signUpStart(user)),
    closeSignIn: () => dispatch(closeSignIn()),
    changeForm: (event) => dispatch(changeForm(event)),
    passwordError: () => dispatch(passwordError()),
    toggleRegistered: () => dispatch(toggleRegistered())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);