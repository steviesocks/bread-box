import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCookbookRecipes } from '../../redux/cookbook/cookbook.selectors';

import { Container, Typography } from '@material-ui/core';
import RecipeCard from '../../components/recipe-card/recipe-card.component';

import useStyles from './cookbook.styles';


const CookbookPage = ({ cookbookRecipes }) => {

    const classes = useStyles();

    return (
        <Container className={classes.cookbookPage}>
            <Typography variant="h4" component="h1" className={classes.title} align="left">
                Cookbook
            </Typography>
            <Container className={classes.cookbook}>
                {
                    cookbookRecipes.map((item, index) => (
                        <RecipeCard 
                            key={item.name}
                            name={item.name} 
                            imageUrl={item.imageUrl} 
                            notes={item.notes} 
                            dateCreated={item.dateCreated}
                            index={index}
                            />
                    ))
                }
            </Container>
        </Container>
    )
};

const mapStateToProps = createStructuredSelector({
    cookbookRecipes: selectCookbookRecipes
});

export default connect(mapStateToProps)(CookbookPage);