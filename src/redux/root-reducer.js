import { combineReducers } from 'redux';

import calculatorReducer from './calculator/calculator.reducer';
import recipeReducer from './recipe/recipe.reducer';
import cookbookReducer from './cookbook/cookbook.reducer';
import notificationsReducer from './notifications/notifications.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    calculator: calculatorReducer,
    recipe: recipeReducer,
    cookbook: cookbookReducer,
    notifications: notificationsReducer,
    user: userReducer
});