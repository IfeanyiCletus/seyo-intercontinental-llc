import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
} from 'react-native';
import Colors from '../constants/Colors';
import OfficeView from './OfficeView';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import SolutionMainView from './SolutionMainView';

const windowWidth = Dimensions.get('window').width;

export default function OurSolution(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View2
      source={require('../../assets/images/screen1440/gradient-3.png')}
      style={{ alignItems: 'center' }}
    >
      <ImageBackground
        source={require('../../assets/images/screen1440/back-image1.png')}
        style={styles.container}
      >
        <Text style={styles.text}>Our Solution</Text>
        <View style={{ width: '70%' }}>
          <Text style={styles.text1}>
            ACCESS MENTOR removes these barriers by creating a global digital
            marketplace where expertise meets need — fairly, transparently, and
            securely.
          </Text>
        </View>
      </ImageBackground>
      <View3 style={styles.container1}>
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
    width: 1256,
    justifyContent: 'center',
    alignItems: 'center',
    height: 221,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth > 1280 ? '63%' : '73%',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 60,
    width: '70%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'bold',
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  text1: {
    fontFamily: 'light',
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
  text2: {
    fontSize: 24,
    fontFamily: 'light',
    lineHeight: 42,
    textAlign: 'right',
  },
});
