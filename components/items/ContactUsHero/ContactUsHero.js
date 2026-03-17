import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedText from '../ThemedText';

export default function ContactUsHero(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/contact-us-hero.png')}
      style={[
        styles.container,
        {
          width,
          height: isTablet ? (isPhone ? 480 : 560) : 720,
          paddingHorizontal: isPhone ? 16 : 24,
        },
      ]}
    >
      <View>
        <ThemedText
          style={[styles.text, isTablet && styles.textTablet, isPhone && styles.textPhone]}
        >
          Get in Touch
        </ThemedText>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <ThemedText
          style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}
        >
          We're here to help you succeed. Reach out to us anytime.
        </ThemedText>
      </View>
      <View style={styles.badgeRow}>
        <View style={styles.container1}>
          <Ionicons name={'time-outline'} color={Colors.gray} size={20} />
          <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
            24/7 Support Available
          </ThemedText>
        </View>
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
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  textTablet: {
    fontSize: 52,
    lineHeight: 56,
  },
  textPhone: {
    fontSize: 34,
    lineHeight: 38,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'light',
    lineHeight: 32,
    color: Colors.gray,
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
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 32,
    color: Colors.gray,
    marginLeft: 10,
  },
  text2Phone: {
    fontSize: 14,
    lineHeight: 24,
  },
});
