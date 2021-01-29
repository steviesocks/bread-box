import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import BreadBoxIcon from '../breadbox-icon/breadbox-icon.component';
import Menu from '../menu/menu.component';
import useStyles from './side-bar.styles';

const SideBar = () => {

    const classes = useStyles();

    const [toggleTextMenu, setToggleTextMenu] = useState(true)

    const toggleMenu = () => {
        setToggleTextMenu(!toggleTextMenu)
    }

    return (
        <Container className={classes.menu}>
            <BreadBoxIcon toggleMenu={toggleMenu} rotate={toggleTextMenu}/>
            <Menu toggleText={toggleTextMenu} />
        </Container>
    )
};

export default SideBar;
