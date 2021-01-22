import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { openSignIn } from '../../redux/sign-in/sign-in.actions';

import { Container, MenuItem, Divider, Typography } from '@material-ui/core';

import useStyles from './menu.styles.js';
import SignIn from '../sign-in/sign-in.component';


const Menu = ({ menuOpen, history, currentUser, signOutStart, signInOpen, openSignIn, closeSignIn }) => {
    const classes = useStyles();

    const signInHandleClick = () => {
        openSignIn()
    }

    const signOutHandleClick = () => {
        signOutStart()
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
            <SignIn />
        </Container>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    signOutStart: (user) => dispatch(signOutStart(user)),
    openSignIn: () => dispatch(openSignIn()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));