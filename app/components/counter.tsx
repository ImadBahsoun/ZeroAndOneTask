import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements"

const CounterForm = (props: any) => {

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <Header 
      centerComponent = {{ text : "MeTube", style : { color : "white"}}}
      />
      <View style = {styles.subView} >

    <View style={styles.videoListViewStyles}>
        <TouchableOpacity
        onPress={() => props.onDecrement(1) }>
         <Text 
        style={styles.actionTextStyles}
         > - </Text>
      </TouchableOpacity>

      <Text style = {styles.timeStyles}> {props.times} </Text>

      <TouchableOpacity
        onPress={() => props.onIncrement(1)}>
         <Text 
        style={styles.actionTextStyles}
         > + </Text>
      </TouchableOpacity>
    </View>
    <View style = {styles.resetViewStyles}>
       <TouchableOpacity
       style = {styles.resetButtonStyles}
        onPress={() => props.onReset()}>
           <Text
            style={styles.resetTextStyles}
           >Reset</Text>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  safeAreaStyles : {
    flex: 1,
    backgroundColor : "#ddd",
  },

  subView : { 
  flex: 1,
  flexDirection : 'column',
  justifyContent:'center'
  },

  videoListViewStyles : {
    justifyContent: 'space-around',
    flexDirection: "row" 
  },

  actionTextStyles: {
    fontSize: 20,
    color: 'green',
    backgroundColor : "black",
    padding : 10,
    width : 40
  },

  timeStyles : {
    fontSize : 20,
    padding : 10
  },

  resetViewStyles: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20 
  },

  resetButtonStyles: {
  flex : 1,
  flexDirection: 'column',
  justifyContent:'center'
  },

  resetTextStyles: {
  fontSize: 20,
  color: 'green',
  backgroundColor : "black",
  width : 80,
  height : 30,
  justifyContent: 'center',
  textAlign : 'center',
  alignSelf:'center'
}

});

export default CounterForm;
