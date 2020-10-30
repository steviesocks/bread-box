import React, { useEffect, useState } from 'react';
import { Button, 
    Select, 
    InputLabel, 
    MenuItem, 
    FormControl, 
    TextField, 
    Paper, 
    Container,
    List } from '@material-ui/core';
import RecipeItem from '../recipe-item/recipe-item.component'

import { INGREDIENTS_LIST } from '../../conversion/conversions';

import './calculator.styles.scss';

const Calculator = () => {
    const [ingredient, setIngredient] = useState(null);
    const [amountInGrams, setAmountInGrams] = useState(null);
    const [amountInCups, setAmountInCups] = useState(null);
    const [convertToCups, setConvertToCups] = useState(false);
    const [recipe, setRecipe] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        switch (name) {
            case "select-ingredient":
                setIngredient(event.target.value);
                break;
            case "input-cups":
                setAmountInCups(event.target.value);
                break;
            case "convert-to-cups":
                setConvertToCups(!convertToCups);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        recipe.length ? setRecipe([...recipe, {name: ingredient, amount: amountInGrams}]) : setRecipe([{name: ingredient, amount: amountInGrams}]);
        // setIngredient(null);
        // setAmountInCups(null);
    };

    useEffect(() => {
        if (ingredient) {
            setAmountInGrams(INGREDIENTS_LIST[ingredient].cupsToGrams*amountInCups);
        }
    }, [ingredient, amountInCups])

    return (
        <Container className="container" >
            <Paper className="paper">
                <form className="calculator" onSubmit={handleSubmit}>
                    <FormControl className="form-control">
                        <InputLabel htmlFor="ingredient-select">Ingredient</InputLabel>
                        <Select
                            required
                            id="select" 
                            value={ingredient}
                            onChange={handleChange}
                            inputProps={{
                                name: "select-ingredient",
                                id: "ingredient-select"
                            }}
                        >
                            {
                                Object.keys(INGREDIENTS_LIST).map(item => {
                                    return <MenuItem value={item}>{item}</MenuItem>
                                })
                            }
                        </Select>
                        <TextField 
                            required 
                            id="amount-in-cups"
                            label="Cups"
                            name="input-cups"
                            type="number"
                            inputProps={{
                                step: "0.25",
                                min: "0"
                            }}
                            value={amountInCups}
                            onChange={handleChange}
                        >
                        </TextField>
                        <span>weight in grams: {amountInGrams}</span>
                        <Button 
                            className="go-button"
                            variant="contained" 
                            color="secondary"
                            type="submit"
                        >
                            add to recipe
                        </Button>
                    </FormControl>
                
                </form>
            </Paper>
            <Paper> 
                <h5>Recipe</h5>
                <List dense={false}>
                    { recipe.map((item) => {
                        return <RecipeItem key={item.name} name={item.name} amount={item.amount} />
                    })}
                </List>
            </Paper>
        </Container>
        
    )
};

export default Calculator;