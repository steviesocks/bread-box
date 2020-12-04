import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { cookbookSagas } from './cookbook/cookbook.sagas';


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(cookbookSagas)
    ]);
};
