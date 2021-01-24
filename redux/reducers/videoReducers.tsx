import { FETCHING, FETCH_SUCCEEDED, FETCH_FAILED } from "../actions/videoActions/actionTypes"

const videoReducers = (initialState = {videos: [], loading: false}, action) => {
    switch (action.type) {
        case FETCHING :
            return { videos : [], loading: action.loading}
        case FETCH_SUCCEEDED :
            return { videos : action.receivedVideos, loading: action.loading};
        case FETCH_FAILED :
            return [];
        default:
            return initialState
    }
}

export default videoReducers;