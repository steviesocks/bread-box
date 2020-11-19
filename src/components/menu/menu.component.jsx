import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Container, MenuItem } from '@material-ui/core';

import useStyles from './menu.styles.js';

const Menu = ({ menuOpen, history }) => {
    const classes = useStyles();

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
    </Container>
    )
};

export default withRouter(Menu);