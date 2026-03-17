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

export default function WhatWeOfferHero(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/what-we-offer-hero.png')}
      style={[
        styles.container,
        {
          width,
          height: isTablet ? (isPhone ? 520 : 600) : 720,
          paddingHorizontal: isPhone ? 16 : 24,
        },
      ]}
    >
      <View>
        <ThemedText
          style={[styles.text, isTablet && styles.textTablet, isPhone && styles.textPhone]}
        >
          How Our Platform Works
        </ThemedText>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <ThemedText
          style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}
        >
          Comprehensive services designed to support your personal and
        </ThemedText>
        <ThemedText
          style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}
        >
          professional growth across the globe
        </ThemedText>
      </View>
      <View style={styles.badgesRow}>
        <View style={styles.container1}>
          <Ionicons name={'time-outline'} color={Colors.gray} size={20} />
          <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
            Flexible hours
          </ThemedText>
        </View>
        <View style={styles.container1}>
          <Ionicons name={'globe-outline'} color={Colors.gray} size={20} />
          <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
            Global Access
          </ThemedText>
        </View>
        <View style={styles.container1}>
          <Ionicons
            name={'shield-checkmark-outline'}
            color={Colors.gray}
            size={20}
          />
          <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
            Secure Platform
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
    backgroundColor: Colors.white01,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 16,
  },
  badgesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 12,
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
    fontSize: 18,
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
