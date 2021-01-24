import React from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import { Card } from "react-native-elements"

import WatchButton from "./styled/button/watchButton"

const VideoListItem = ({video}) => {
    const {
        publishTime,
        title,
        channelTitle,
        thumbnails : { medium : {url}}
    } = video.snippet
    
return (
        <View>
            <Card containerStyle = {{
                padding : 10,
                borderWidth : 0.2,
                borderColor : "white"
            }} >
            <Image 
            source = {{ uri : url}} 
            style = {{
                  alignSelf : "stretch",
                  height : 180
            }} 
            />
            <View style = {styles.contentStyle} >
             <Text style = {styles.titleStyle} >{title} </Text>
             <Text style = {styles.channelTitleStyle} >{channelTitle} * Published in {publishTime.split("T")[0]} </Text>
            </View>
            <WatchButton videoId = {video.id.videoId} />
            </Card>
        </View>
    );

};

const styles = {
    cardStyle : {
        padding : 5,
        backgroundColor: "#ddd"
    },
    contentStyle : {
        flex : 1,
        padding : 5
    },
    titleStyle : {
        fontSize : 12,
        marginBottom : 5
    },
    channelTitleStyle : {
        fontSize : 11,
        color : "#777777",
        marginBottom : 5,
    },
}

export default VideoListItem;

