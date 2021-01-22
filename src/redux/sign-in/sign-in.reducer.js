import UserActionTypes from '../user/user.types';
import SignInActionTypes from './sign-in.types';

const INITIAL_STATE = {
    open: false,
    isSigningIn: false,
    error: null,
    user: { email: "", password: "", displayName: "", confirmPassword: "" },
    isRegistered: true
};

const signInErrorMessage = 'There was an error signing in.'
const passwordErrorMessage = "Passwords don't match"

const signInReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                isSigningIn: true
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                isSigningIn: false,
                open: false,
                user: INITIAL_STATE.user,
                error: null,
                isRegistered: true
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isSigningIn: false,
                error: signInErrorMessage
            };
        case SignInActionTypes.OPEN_SIGN_IN:
            return {
                ...state,
                open: true
            };
        case SignInActionTypes.CLOSE_SIGN_IN:
            return {
                ...state,
                open: false,
                user: INITIAL_STATE.user,
                error: null
            };
        case SignInActionTypes.CHANGE_FORM:
            const { name, value } = action.payload.target
            return {
                ...state,
                user :{
                    ...state.user,
                    [name]: value
                }
            };
        case SignInActionTypes.PASSWORD_ERROR:
            return {
                ...state,
                error: passwordErrorMessage
            };
        case SignInActionTypes.TOGGLE_IS_REGISTERED:
            return {
                ...state,
                isRegistered: !state.isRegistered
            }
        default:
            return state;
    }
};

export default signInReducer;