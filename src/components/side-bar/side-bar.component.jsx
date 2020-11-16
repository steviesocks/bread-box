import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import BreadBoxIcon from '../breadbox-icon/breadbox-icon.component';
import Menu from '../menu/menu.component';
import useStyles from './side-bar.styles';

const SideBar = () => {

    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Container className={classes.menu}>
            <BreadBoxIcon toggleMenu={toggleMenu} menuOpen={menuOpen}/>
            <Menu menuOpen={menuOpen}/>
        </Container>
    )
};

export default SideBar;
