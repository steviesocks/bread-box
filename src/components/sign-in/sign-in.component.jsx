import React, { useState } from 'react';
import { connect } from 'react-redux';
import { emailSignInStart, signUpStart } from '../../redux/user/user.actions';

import {
    Dialog,
    DialogTitle,
    TextField,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button
} from '@material-ui/core';
import useStyles from './sign-in.styles';


const SignIn = ({ open, handleClose, emailSignInStart, signUpStart }) => {

    const classes = useStyles()

    const [isRegistered, setIsRegistered] = useState(true);
    const [user, setUser] = useState({ email: "", password: "", displayName: "" })

    const handleRegistered = () => {
        setIsRegistered(!isRegistered)
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        if (isRegistered) {
            try {
                emailSignInStart(user)
                handleClose()
            } catch(err) {
                console.log("error signing in", err)
            }
        } else {
            signUpStart(user)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(previousUser => ({
            ...previousUser,
            [name]: value
        }))
    }

    return (
        <Dialog
            PaperProps={{ className: classes.paper }}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle className={classes.title} >{isRegistered ? "sign in" : "create an account"}</DialogTitle>
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
                                margin="dense"
                                label="Display name"
                                name="displayName"
                                type="text"
                                fullWidth
                                value={user.displayName}
                                onChange={handleChange}
                            /> :
                            null
                    }
                    <TextField
                        autoFocus={isRegistered ? true : false}
                        margin="dense"
                        label="Email"
                        type="email"
                        name="email"
                        fullWidth
                        value={user.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        name="password"
                        fullWidth
                        value={user.password}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" 
                        color="primary" 
                        variant="contained"
                    >
                        {isRegistered ? "Sign In" : "Sign Up"}
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

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (user) => dispatch(emailSignInStart(user)),
    signUpStart: (user) => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignIn);