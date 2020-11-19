export const deleteRecipe = (indexToDelete, recipesArray) => {
    return recipesArray.filter((item, index) => index !== indexToDelete)
}