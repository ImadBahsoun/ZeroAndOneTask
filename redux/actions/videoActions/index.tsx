import { FETCHING, ADD_VIDEO, FETCH_VIDEO, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

export const addVideoAction = (newVideo) => {
    return {
        type : ADD_VIDEO,
        newVideo
    }
}

export const fetchingVideoAction = () => {
    return {
        type : FETCHING,
        loading : true
    }
}

export const fetchVideoAction = (searchValue) => {
    return{
        type : FETCH_VIDEO,
        searchValue
    }
}

export const fetchSuccessAction = (receivedVideos) => {
    return{
        type : FETCH_SUCCEEDED,
        receivedVideos
    }
}

export const fetchFailedAction = (error) => {
    return{
        type : FETCH_FAILED,
        error
    }
}