import { NotificationsActionTypes } from './notifications.types';

const INITIAL_STATE = {
    notifications: []
}

const notificationsReducer = (state = INITIAL_STATE, action) => {
    // const { notifications } = state;
    switch (action.type) {
        case NotificationsActionTypes.ENQUEUE_SNACKBAR:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        key: action.key,
                        ...action.notification,
                    },
                ],
            };

        case NotificationsActionTypes.CLOSE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.map(notification => (
                    (action.dismissAll || notification.key === action.key)
                        ? { ...notification, dismissed: true }
                        : { ...notification }
                )),
            };

        case NotificationsActionTypes.REMOVE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.filter(
                    notification => notification.key !== action.key,
                ),
            };
        default:
            return state;
    }
}

export default notificationsReducer;
