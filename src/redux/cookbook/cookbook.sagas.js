import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { setRecipesFromFirebase, resetCookbook } from './cookbook.actions';

import { firestore, getCookbookRef } from '../../firebase/firebase.utils';
import CookbookActionTypes from './cookbook.types';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCookbookRecipes } from './cookbook.selectors';
import { stripClassFromRecipes } from '../../utils/utils';

export function* onSignInSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_IN_SUCCESS,
        getRecipesFromFirebase
    )
}

export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearRecipesOnSignOut
    )
}

export function* onRecipesUpdate() {
    yield takeLatest(
        [CookbookActionTypes.ADD_RECIPE,
        CookbookActionTypes.DELETE_RECIPE,
        CookbookActionTypes.RESET_COOKBOOK],
        setFirebaseRecipes
    )
}

export function* getRecipesFromFirebase({payload: { id }}) {
    try {
        const cookbookRef = yield firestore.doc(`cookbooks/${id}`).get()
        yield put(setRecipesFromFirebase(cookbookRef.data().recipes))
    } catch(error) {
        yield console.log("error getting cookbook")
    }
}

export function* clearRecipesOnSignOut() {
    yield put(resetCookbook())
}

export function* setFirebaseRecipes() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {

        try {
            const localRecipes = yield select(selectCookbookRecipes)
            const recipes = stripClassFromRecipes(localRecipes)
            const cookbookRef = yield getCookbookRef(currentUser.id)
            yield cookbookRef.update({ recipes })
        } catch(error) {
            yield console.log(error)
        }
    }
}

export function* cookbookSagas() {
    yield all([
        call(onSignInSuccess),
        call(onSignOutSuccess),
        call(onRecipesUpdate)
    ])
}