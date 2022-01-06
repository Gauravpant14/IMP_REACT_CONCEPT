import {all, call} from 'redux-saga/effects'
import photosSaga from './PhotosSaga'
import userSaga from './userSaga'

function* rootSaga() {
    yield all([
        call(photosSaga),
        call(userSaga)
    ]);
}

export default rootSaga