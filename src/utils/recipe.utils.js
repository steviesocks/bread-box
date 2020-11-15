export const deleteIngredient = (key, ingredients) => {
    return ingredients.filter(item => item.key !== key)
}