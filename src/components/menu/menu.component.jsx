import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import BreadBoxIcon from '../breadbox-icon/breadbox-icon.component';
import Dropdown from '../dropdown/dropdown.component';
import useStyles from './menu.styles';

const Menu = () => {

    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Container className={classes.menu}>
            <BreadBoxIcon toggleMenu={toggleMenu} menuOpen={menuOpen}/>
            <Dropdown menuOpen={menuOpen}/>
        </Container>
    )
};

export default Menu;
