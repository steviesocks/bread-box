import React from 'react';
import { Container, MenuItem } from '@material-ui/core';

import useStyles from './menu.styles.js';

const Menu = ({ menuOpen }) => {
    const classes = useStyles();

    return (
    <Container className={`${classes.dropdown} ${menuOpen ? null : classes.hidden}`}>
        <MenuItem className={classes.menuItem} disableGutters>Create</MenuItem>
        <MenuItem className={classes.menuItem} disableGutters>Browse</MenuItem>
        <MenuItem className={classes.menuItem} disableGutters>Learn</MenuItem>
    </Container>
    )
};

export default Menu;