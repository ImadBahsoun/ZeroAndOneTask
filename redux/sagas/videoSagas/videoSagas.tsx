import { FETCHING, FETCH_VIDEO, FETCH_SUCCEEDED, FETCH_FAILED } from '../../actions/videoActions/actionTypes'

import { put, takeEvery, takeLatest} from 'redux-saga/effects'
import { Api } from "../api"

function* fetchVideos(searchValue) {
    try{
          yield put({
            type : FETCHING,
            loading : true
        })
        const receivedVideos = yield Api.fetchVideos(searchValue);
        yield put({
            type : FETCH_SUCCEEDED,
            receivedVideos: receivedVideos,
            loading : false
        })
    }
    catch(error)
    {
        yield put({
            type: FETCH_FAILED,
            error
        })
        alert(error.message)
    }
}

export function* watchFetchVideos() {
    yield takeEvery(FETCH_VIDEO, fetchVideos)
}