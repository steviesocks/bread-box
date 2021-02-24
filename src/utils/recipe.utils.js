import { createKey } from './utils';

export const deleteIngredient = (key, ingredients) => {
    return ingredients.filter(item => item.key !== key)
}

export const deleteStep = (id, steps) => {
    return steps.filter(item => item.id !== id)
}

export class Recipe {
    constructor(name, link, imageUrl, notes, ingredients, steps) {
        this.key = createKey();
        this.name = name;
        this.ingredients = ingredients;
        this.steps = steps;
        this.dateCreated = new Date().toString();
        this.notes = notes;
        this.link = link;
        this.imageUrl = imageUrl !== undefined ? imageUrl : '../assets/bread64.png';
    }
}