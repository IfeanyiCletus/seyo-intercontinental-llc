import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
  Pressable,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';

import WhatDrivesUsView from '../WhatDrivesUsView';

const windowWidth = Dimensions.get('window').width;

export default function AboutUsWhatDrivesUs(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/section.png')}
      style={styles.container}
    >
      <View>
        <Text style={styles.text1}>What Drives Us</Text>
      </View>
      <View style={styles.container1}></View>
      <View style={{ flexDirection: 'row' }}>
        <WhatDrivesUsView
          icon={'globe-outline'}
          text={'Global Reach'}
          text1={
            'Serving clients across different continents and cultures with equal dedication and commitment'
          }
        />
        <WhatDrivesUsView
          icon={'medal-outline'}
          text={'Quality Excellence'}
          text1={
            'Maintaining global standards in everyservice we provide, ensuring the best mentorship experience.'
          }
        />
        <WhatDrivesUsView
          icon={'people-outline'}
          text={'People First'}
          text1={
            'Committed to solving real challenges faced by entrepreneurs and individuals worldwide.'
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 973,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    marginTop: 20,
    marginBottom: 50,
    borderTopColor: Colors.primary,
    borderTopWidth: 4,
    width: 100,
  },
  text1: {
    fontSize: 55,
    fontFamily: 'bold',
    lineHeight: 65,
    color: Colors.white,
    textAlign: 'center',
  },
});
