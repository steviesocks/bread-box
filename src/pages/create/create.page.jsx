import React from 'react';

import { Container } from '@material-ui/core';
import CreateInputTabs from '../../components/create-input-tabs/create-input-tabs.component';
import Recipe from '../../components/recipe/recipe.component';
import UnitConversion from '../../components/unit-conversion/unit-conversion.component';

import useStyles from './create.styles';

const CreatePage = () => {

    const classes = useStyles();

    return (
        <Container className={classes.createPage}>
            <CreateInputTabs />
            <Recipe />
            <UnitConversion />
        </Container>
    );
};

export default CreatePage;