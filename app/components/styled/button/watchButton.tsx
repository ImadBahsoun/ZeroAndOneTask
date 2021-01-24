import React from 'react'
import { Linking } from 'react-native'
import {Button} from 'react-native-elements';

const WatchButton = ({ videoId }) => {
    return (
    <Button 
    raised
    title = "Watch on Youtube"
    icon = {{ name : 'play-arrow'}}
    containerStyle = {{ marginTop : 10}}
    onPress = {async() => 
        {
            const url = `https://www.youtube.com/watch?v=${videoId}`
              const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
            alert(`Don't know how to open this URL: ${url}`);
    }
  }
        }
    />
    )
}

export default WatchButton

