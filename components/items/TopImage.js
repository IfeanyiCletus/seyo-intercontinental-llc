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
        <Image source={props.logo} />
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
    width: '80%',
    alignSelf: 'center',
  },
  text1: {
    color: Colors.white,
    fontSize: 74,
    fontFamily: 'bold',
  },
  text2: {
    color: Colors.white,
    fontSize: 40,
    fontFamily: 'bold',
  },
  text3: {
    color: Colors.primary,
    fontSize: 40,
    fontFamily: 'bold',
  },
  imageStyle: {
    width: windowWidth,
    height: 943,
    justifyContent: 'center',
  },
});
