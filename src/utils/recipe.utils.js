import { createKey } from './utils';

export const deleteIngredient = (key, ingredients) => {
    return ingredients.filter(item => item.key !== key)
}

export class Recipe {
    constructor(name, link, notes, ingredients) {
        this.key = createKey();
        this.name = name;
        this.ingredients = ingredients;
        this.dateCreated = new Date();
        this.notes = notes;
        this.link = link;
    }
}