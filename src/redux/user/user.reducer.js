import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isSigningIn: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                currentUser: action.payload,
                error: null,
                isSigningIn: false
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                isSigningIn: false
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                isSigningIn: true
            };
        default:
            return state;
    }
};

export default userReducer;