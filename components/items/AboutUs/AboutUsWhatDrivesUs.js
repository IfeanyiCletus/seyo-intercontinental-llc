import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';

import WhatDrivesUsView from '../WhatDrivesUsView';

export default function AboutUsWhatDrivesUs(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/section.png')}
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 973,
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 56 : 0,
          justifyContent: isTablet ? 'flex-start' : 'center',
        },
      ]}
    >
      <View>
        <Text
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
          ]}
        >
          What Drives Us
        </Text>
      </View>
      <View
        style={[
          styles.container1,
          isPhone && { marginTop: 10, marginBottom: 10 },
        ]}
      ></View>
      <View style={styles.cardsRow}>
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
  text1Tablet: {
    fontSize: 42,
    lineHeight: 50,
  },
  text1Phone: {
    fontSize: 30,
    lineHeight: 38,
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
