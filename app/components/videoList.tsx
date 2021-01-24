import React from "react";
import {
    FlatList,
} from "react-native";
import VideoListItem from "./videoListItem";

const VideoList = ({videos}) => {
    const renderItem = ({ item }) => (
    <VideoListItem key={item.etag} video = {item} />
  );

return (
        <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.etag}
        refreshing = {true}
        showsVerticalScrollIndicator={false}
        style = {{marginBottom : 5}}
      />
);
};

export default VideoList;


