import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import VideoContainer from '../containers/video'
import CounterContainer from '../containers/counter'

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={VideoContainer}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Second" component={CounterContainer}  options={{
          tabBarLabel: 'Counter',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name = "clock" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

const LandingComponent = () => {
  return (
      <MyTabs />
  );
};

export default LandingComponent;
