import React from 'react';
import { Container } from '@material-ui/core';

import { default as logo } from '../../assets/bread64.png';

import useStyles from './breadbox-icon.styles';

const BreadBoxIcon = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <img className={classes.logo} src={logo} alt=""/>
        </Container>
    );
}


export default BreadBoxIcon;