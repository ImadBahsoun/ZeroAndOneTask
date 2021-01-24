import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import LandingContainer from './app/containers/landing';

const {Navigator, Screen} = createNativeStackNavigator();

enableScreens();

const App = () => {
  const getScreen = () => {
    return 'Landing';
  };

  return (
    <React.Fragment>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer theme={theme}>
        <Navigator
          initialRouteName={getScreen()}
          screenOptions={{headerShown: false}}>
          <Screen component={LandingContainer} name="Landing" />
        </Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default App;
