import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import SolutionMainView from './SolutionMainView';

export default function OurSolution(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  return (
    <View2
      source={require('../../assets/images/screen1440/gradient-3.png')}
      style={{ alignItems: 'center', paddingHorizontal: isPhone ? 16 : 24 }}
    >
      <ImageBackground
        source={require('../../assets/images/screen1440/back-image1.png')}
        style={[
          styles.container,
          {
            width: isTablet ? '100%' : 1256,
            minHeight: isPhone ? 240 : 221,
            paddingHorizontal: isPhone ? 20 : 24,
          },
        ]}
      >
        <Text style={[styles.text, isPhone && styles.textPhone]}>
          Our Solution
        </Text>
        <ThemedView
          style={{
            width: isTablet ? '100%' : '70%',
            backgroundColor: 'transparent',
          }}
        >
          <Text style={[styles.text1, isPhone && styles.text1Phone]}>
            ACCESS MENTOR removes these barriers by creating a global digital
            marketplace where expertise meets need — fairly, transparently, and
            securely.
          </Text>
        </ThemedView>
      </ImageBackground>
      <View3
        style={[
          styles.container1,
          isTablet && styles.container1Tablet,
          {
            width: isTablet ? '100%' : width > 1280 ? '63%' : '73%',
          },
        ]}
      >
        <SolutionMainView
          uri={require('../../assets/images/screen1440/back-image2.png')}
          text={'For Clients'}
          icon1={'time-outline'}
          text1={'Flexible scheduling'}
          icon2={'cash-outline'}
          text2={'Multiple pricing layer'}
          icon3={'language-outline'}
          text3={'Language choice'}
          icon4={'globe-outline'}
          text4={'Global expertise'}
        />
        <SolutionMainView
          uri={require('../../assets/images/screen1440/back-image3.png')}
          text={'For Mentors'}
          icon1={'people-outline'}
          text1={'Access to international clients'}
          icon2={'cash-outline'}
          text2={'Fair compensation'}
          icon3={'time-outline'}
          text3={'Flexible schedule'}
          icon4={'bar-chart-outline'}
          text4={'Transparent performance tracking'}
        />
      </View3>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 36,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    gap: 24,
  },
  container1Tablet: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'bold',
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  textPhone: {
    fontSize: 22,
  },
  text1: {
    fontFamily: 'light',
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 28,
  },
  text1Phone: {
    fontSize: 16,
    lineHeight: 20,
  },
});
