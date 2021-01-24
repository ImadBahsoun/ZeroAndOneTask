import { all } from 'redux-saga/effects'

import { watchFetchVideos } from './videoSagas/videoSagas'

export function* rootSaga() {
    yield all([
        watchFetchVideos()
    ])
}