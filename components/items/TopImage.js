import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;

export default function TopImage(props) {
  return (
    <ImageBackground source={props.image} style={styles.imageStyle}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>ACCESSMENTOR</Text>
          <Text style={styles.text2}>A Digital Platform Initiative by</Text>
          <Text style={styles.text3}>SEYO INTERCONTINENTAL LLC</Text>
        </View>
        <Image source={props.logo} style={styles.logo} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    width: '90%',
    alignSelf: 'center',
  },
  text1: {
    color: Colors.white,
    fontSize: windowWidth >= 1281 ? 74 : windowWidth > 768 ? 65 : 37,
    fontFamily: 'bold',
  },
  text2: {
    color: Colors.white,
    fontSize: windowWidth >= 1281 ? 40 : 34,
    fontFamily: 'bold',
  },
  text3: {
    color: Colors.primary,
    fontSize: windowWidth >= 1281 ? 40 : windowWidth > 1280 ? 34 : 20,
    fontFamily: 'bold',
  },
  imageStyle: {
    width: windowWidth,
    height: windowWidth > 1280 ? 943 : windowWidth > 768 ? 600 : 416,
    justifyContent: 'center',
  },
  logo: {
    width: windowWidth > 1280 ? 564 : windowWidth > 768 ? 502 : 340,
    height: windowWidth > 1280 ? 482 : windowWidth > 768 ? 429 : 291,
  },
});
