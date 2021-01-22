import SignInActionTypes from './sign-in.types';

export const openSignIn = () => ({
    type: SignInActionTypes.OPEN_SIGN_IN
});

export const closeSignIn = () => ({
    type: SignInActionTypes.CLOSE_SIGN_IN
});

export const changeForm = (event) => ({
    type: SignInActionTypes.CHANGE_FORM,
    payload: event
});

export const passwordError = () => ({
    type: SignInActionTypes.PASSWORD_ERROR
})

export const toggleRegistered = () => ({
    type: SignInActionTypes.TOGGLE_IS_REGISTERED
})