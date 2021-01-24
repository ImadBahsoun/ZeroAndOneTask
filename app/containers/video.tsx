import {connect} from "react-redux"

import VideoComponent from "../components/video";
import { fetchVideoAction, fetchSuccessAction, fetchFailedAction } from '../../redux/actions/videoActions'

const mapStateToProps = (state) => {
  return {
    videos : state.videoReducers.videos || [],
    loading : state.videoReducers.loading || false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchVideo: (searchValue) => {
      dispatch(fetchVideoAction(searchValue))
    },
  }
}

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(VideoComponent);
export default VideoContainer;
