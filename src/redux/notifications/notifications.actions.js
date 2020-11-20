import NotificationsActionTypes from './notifications.types';
import { createKey } from '../../utils/utils';

export const enqueueSnackbar = (notification) => {
    const key = notification.options && notification.options.key;

    return {
        type: NotificationsActionTypes.ENQUEUE_SNACKBAR,
        notification: {
            ...notification,
            key: key || createKey(),
        },
    };
};

export const closeSnackbar = key => ({
    type: NotificationsActionTypes.CLOSE_SNACKBAR,
    dismissAll: !key, // dismiss all if no key has been defined
    key,
});

export const removeSnackbar = key => ({
    type: NotificationsActionTypes.REMOVE_SNACKBAR,
    key,
});
