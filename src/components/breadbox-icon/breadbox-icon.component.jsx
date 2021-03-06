import React from 'react';
import { Container } from '@material-ui/core';

import { default as logo } from '../../assets/bread64.png';

import useStyles from './breadbox-icon.styles';

const BreadBoxIcon = ({ toggleMenu, rotate }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.logoBg}>
                <img className={`${classes.logo} ${rotate ? classes.rotate : null}`} src={logo} alt="" onClick={toggleMenu}/>
            </div>
            
        </Container>
    );
}


export default BreadBoxIcon;