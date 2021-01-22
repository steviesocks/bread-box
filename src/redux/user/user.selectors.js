import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

export const selectIsSigningIn = createSelector(
    [selectUser],
    (user) => user.isSigningIn
);

export const selectUserError = createSelector(
    [selectUser],
    (user) => user.error
);