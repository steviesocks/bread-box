import React from 'react';
import { Container } from '@material-ui/core';

import useStyles from './dropdown.styles.js';

const Dropdown = ({ menuOpen }) => {
    const classes = useStyles();

    return (
    <Container className={`${classes.dropdown} ${menuOpen ? null : classes.hidden}`}>
        
    </Container>
    )
};

export default Dropdown;