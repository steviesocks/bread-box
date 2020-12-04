import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { signInSuccess,
    signInFailure,
    signOutSuccess, 
    signOutFailure, 
    signUpSuccess, 
    signUpFailure } from './user.actions';

import { selectCookbookRecipes } from '../cookbook/cookbook.selectors';

import { auth, getCurrentUser, getUserRef, getCookbookRef } from '../../firebase/firebase.utils';



export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    )
}

export function* onSignOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOut
    )
}

export function* onSignUpStart() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        signUp
    )
}

export function* onSignUpSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        signInAfterSignUp
    )
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* signInWithEmail({payload: { email, password }}) {
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        put(signInFailure(error))
    }
}

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(getUserRef, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error) {
        put(signInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({payload: { email, password, displayName }}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch(error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    try {
        const recipesArray = yield select(selectCookbookRecipes)
        console.log("recipesArray from sagas", recipesArray)
        yield getCookbookRef(user, recipesArray)
    } catch (error) {
        yield put(signInFailure(error))
    }
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onCheckUserSession)
    ])
}