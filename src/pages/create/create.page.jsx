import React from 'react';

import { Container } from '@material-ui/core';
import Ingredient from '../../components/ingredient/ingredient.component';
import Recipe from '../../components/recipe/recipe.component';
import UnitConversion from '../../components/unit-conversion/unit-conversion.component';

import useStyles from './create.styles';

const CreatePage = () => {

    const classes = useStyles();

    return (
        <Container className={classes.createPage}>
            <Ingredient />
            <Recipe />
            <UnitConversion />
        </Container>
    );
};

export default CreatePage;