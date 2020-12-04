import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { Container, MenuItem, Divider, Typography } from '@material-ui/core';

import useStyles from './menu.styles.js';
import SignIn from '../sign-in/sign-in.component';
import { signOutStart } from '../../redux/user/user.actions';

const Menu = ({ menuOpen, history, currentUser, signOutStart }) => {
    const classes = useStyles();

    const [signInOpen, setSignInOpen] = useState(false);

    const signInHandleClick = () => {
        setSignInOpen(true)
    }

    const signOutHandleClick = () => {
        signOutStart()
    }

    const signInHandleClose = () => {
        setSignInOpen(false)
    }

    const { pathname } = history.location;

    return (
        <Container className={`${classes.dropdown} ${menuOpen ? null : classes.hidden}`}>
            <Link to='/'>
                <MenuItem className={`${classes.menuItem} ${pathname === '/' ? classes.selected : null}`} disableGutters >Create</MenuItem>
            </Link>
            <Link to='/cookbook'>
                <MenuItem className={`${classes.menuItem} ${pathname === '/cookbook' ? classes.selected : null}`} disableGutters>Cookbook</MenuItem>
            </Link>
            <MenuItem className={`${classes.menuItem} ${pathname === '/learn' ? classes.selected : null}`} disableGutters>Learn</MenuItem>
            <Divider />
            {
                !currentUser ?
                    <MenuItem className={classes.menuItem} disableGutters onClick={signInHandleClick}>Sign In</MenuItem>
                    :
                    <div>
                        <MenuItem className={classes.menuItem} disableGutters onClick={signOutHandleClick}>Sign Out</MenuItem>
                        <Typography className={classes.userName}>
                            {`welcome, ${currentUser.displayName}`}
                        </Typography>
                    </div>

            }
            <SignIn open={signInOpen} handleClose={signInHandleClose} />
        </Container>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    signOutStart: (user) => dispatch(signOutStart(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));