import React from 'react';

import { Container, Typography } from '@material-ui/core';
import CookbookContainer from '../../components/cookbook/cookbook.container';


import useStyles from './cookbook.styles';

const CookbookPage = () => {

    const classes = useStyles();

    return (
        <Container className={classes.cookbookPage}>
            <Typography variant="h4" component="h1" className={classes.title} align="left">
                Cookbook
            </Typography>
            <CookbookContainer />
        </Container>
    )
};

export default CookbookPage;