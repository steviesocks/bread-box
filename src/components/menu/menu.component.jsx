import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { openSignIn } from '../../redux/sign-in/sign-in.actions';

import { Container, MenuItem, Divider, Typography, Tooltip } from '@material-ui/core';
import IconMenuItem from './icon-menu-item/icon-menu-item.component';
import createIcon from '../../assets/chef-hat.svg'
import learnIcon from '../../assets/idea.svg'
import cookbookIcon from '../../assets/cookbook.svg'

import useStyles from './menu.styles.js';
import SignIn from '../sign-in/sign-in.component';


const Menu = ({ toggleText, history, currentUser, signOutStart, openSignIn }) => {
    const classes = useStyles();

    const signInHandleClick = () => {
        openSignIn()
    }

    const signOutHandleClick = () => {
        signOutStart()
    }

    const { pathname } = history.location;

    return (
        <Container className={classes.dropdown}>
            <Link to='/'>
                <IconMenuItem active={pathname === '/'} shift={toggleText} height="24px" svg={createIcon} alt="" label="Create"/>
            </Link>
            <Link to='/cookbook'>
                <IconMenuItem active={pathname === '/cookbook'} shift={toggleText} height="24px" svg={cookbookIcon} alt="" label="Cookbook"/>
            </Link>
            <Tooltip disableFocusListener title="Coming soon" arrow enterDelay={50} placement="right">
                <IconMenuItem active={pathname === '/learn'} shift={toggleText} height="24px" svg={learnIcon} alt="" label="Learn"/>
            </Tooltip>
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