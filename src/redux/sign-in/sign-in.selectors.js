import { createSelector } from 'reselect';

const selectSignIn = state => state.signIn;

export const selectOpen = createSelector(
    [selectSignIn],
    (signIn) => signIn.open
);

export const selectIsSigningIn = createSelector(
    [selectSignIn],
    (signIn) => signIn.isSigningIn
);

export const selectError = createSelector(
    [selectSignIn],
    (signIn) => signIn.error
);

export const selectFormState = createSelector(
    [selectSignIn],
    (signIn) => signIn.user
)

export const selectIsRegistered = createSelector(
    [selectSignIn],
    (signIn) => signIn.isRegistered
)