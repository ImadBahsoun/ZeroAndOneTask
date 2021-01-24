import React, {useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Header, Button } from "react-native-elements";
import VideoList from "./videoList";
import {Loader} from "./styled/loader/loader"

const VideoComponent = (props : any) => {
  const [searchValue, setSearchValue] = useState("")
  const [render, _] = useState("")

    useEffect(() => {
      props.onFetchVideo("React Native")
  }, [render]);

  return (
    <SafeAreaView style={styles.safeAreaViewStyles}>
      <Header 
        centerComponent = {{ text : "MeTube", style : { color : "white"}}} 
      />
      <View style = {styles.containerStyle}>
      <TextInput style = {styles.searchTextStyle} value = {searchValue} onChangeText = {(value) => setSearchValue(value) } />
      <Button style = {styles.buttonStyle} title = 'Search' onPress = {() => {
        setSearchValue("")
        props.onFetchVideo(searchValue)}} />
      </View>
      {props.loading ? <Loader /> :
      <VideoList  videos = {props.videos}  />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection : 'row',
    marginTop : 20,
    justifyContent: "center",
    marginBottom : 10
  } ,
  searchTextStyle : {flex : 0.9, backgroundColor : "white", height: 40} ,
  buttonStyle : {flex : 0.1,height : 30},
  safeAreaViewStyles: { 
    flex: 1,
    backgroundColor : "#ddd" 
  }
});

export default VideoComponent;
