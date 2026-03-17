import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedText from '../ThemedText';

export default function AboutUsHero(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/about_us_hero.png')}
      style={[
        styles.container,
        {
          width,
          height: isTablet ? (isPhone ? 500 : 560) : 720,
          paddingHorizontal: isPhone ? 16 : 24,
        },
      ]}
    >
      <View>
        <ThemedText
          style={[
            styles.text,
            isTablet && styles.textTablet,
            isPhone && styles.textPhone,
            theme === 'light' && { color: Colors.white },
          ]}
        >
          About Seyo
        </ThemedText>
        <ThemedText
          style={[
            styles.text,
            isTablet && styles.textTablet,
            isPhone && styles.textPhone,
            theme === 'light' && { color: Colors.white },
          ]}
        >
          INTERCONTINENTAL
        </ThemedText>
      </View>
      <View style={{ marginTop: 20 }}>
        <ThemedText
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
            theme === 'light' && { color: Colors.gray },
          ]}
        >
          Connecting the world through mentorship and professional guidance
        </ThemedText>
      </View>
      <View style={styles.container1}>
        <Ionicons name={'location-outline'} color={Colors.gray} size={20} />
        <ThemedText
          style={[
            styles.text2,
            isPhone && styles.text2Phone,
            theme === 'light' && { color: Colors.gray },
          ]}
        >
          Cheyenne, Wyoming, USA
        </ThemedText>
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
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  textTablet: {
    fontSize: 52,
    lineHeight: 56,
  },
  textPhone: {
    fontSize: 36,
    lineHeight: 40,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'light',
    lineHeight: 32,
    textAlign: 'center',
  },
  text1Tablet: {
    fontSize: 18,
    lineHeight: 28,
  },
  text1Phone: {
    fontSize: 16,
    lineHeight: 24,
  },
  text2: {
    fontSize: 18,
    fontFamily: 'light',
    lineHeight: 32,
  },
  text2Phone: {
    fontSize: 16,
    lineHeight: 24,
  },
});
