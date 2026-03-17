import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';

export default function TopImage(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  const heroHeight =
    width > 1280 ? 943 : width > 768 ? 600 : isPhone ? 500 : 560;
  const logoWidth =
    width > 1280 ? 564 : width > 768 ? 502 : isPhone ? 220 : 280;
  const logoHeight =
    width > 1280 ? 482 : width > 768 ? 429 : isPhone ? 188 : 240;

  return (
    <ImageBackground
      source={props.image}
      style={[styles.imageStyle, { width, height: heroHeight }]}
    >
      <View
        style={[
          styles.container,
          isTablet && styles.containerTablet,
          isPhone && styles.containerPhone,
        ]}
      >
        <View style={styles.textWrapper}>
          <Text
            style={[
              styles.text1,
              isTablet && styles.text1Tablet,
              isPhone && styles.text1Phone,
            ]}
          >
            ACCESSMENTOR
          </Text>
          <Text
            style={[
              styles.text2,
              isTablet && styles.text2Tablet,
              isPhone && styles.text2Phone,
            ]}
          >
            A Digital Platform Initiative by
          </Text>
          <Text
            style={[
              styles.text3,
              isTablet && styles.text3Tablet,
              isPhone && styles.text3Phone,
            ]}
          >
            SEYO INTERCONTINENTAL LLC
          </Text>
        </View>
        <Image
          source={props.logo}
          style={[
            styles.logo,
            {
              width: logoWidth,
              height: logoHeight,
            },
            isTablet && styles.logoTablet,
            isPhone && styles.logoPhone,
          ]}
          resizeMode="contain"
        />
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
  containerTablet: {
    width: '88%',
    marginHorizontal: 0,
    gap: 24,
  },
  containerPhone: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    gap: 28,
  },
  textWrapper: {
    flexShrink: 1,
  },
  text1: {
    color: Colors.white,
    fontSize: 74,
    fontFamily: 'bold',
    lineHeight: 80,
  },
  text1Tablet: {
    fontSize: 40,
    lineHeight: 54,
  },
  text1Phone: {
    fontSize: 32,
    lineHeight: 38,
  },
  text2: {
    color: Colors.white,
    fontSize: 40,
    fontFamily: 'bold',
    lineHeight: 46,
  },
  text2Tablet: {
    fontSize: 24,
    lineHeight: 32,
  },
  text2Phone: {
    fontSize: 18,
    lineHeight: 24,
  },
  text3: {
    color: Colors.primary,
    fontSize: 40,
    fontFamily: 'bold',
    lineHeight: 46,
  },
  text3Tablet: {
    fontSize: 24,
    lineHeight: 34,
  },
  text3Phone: {
    fontSize: 20,
    lineHeight: 26,
  },
  imageStyle: {
    justifyContent: 'center',
  },
  logo: {
    flexShrink: 0,
  },
  logoTablet: {
    alignSelf: 'center',
  },
  logoPhone: {
    alignSelf: 'center',
  },
});
