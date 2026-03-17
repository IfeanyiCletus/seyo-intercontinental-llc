import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import ThemedText from '../ThemedText';

export default function MeetTheTeamHero(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/meet-the-team-hero.png')}
      style={[
        styles.container,
        {
          width,
          height: isTablet ? (isPhone ? 500 : 560) : width > 1280 ? 720 : 578,
          paddingHorizontal: isPhone ? 16 : 24,
        },
      ]}
    >
      <View style={styles.container1}>
        <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
          Meet Our Expert Team
        </ThemedText>
      </View>
      <View>
        <ThemedText
          style={[styles.text, isTablet && styles.textTablet, isPhone && styles.textPhone]}
        >
          Leadership & Mentors
        </ThemedText>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <ThemedText
          style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}
        >
          World-class professionals dedicated to your success
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
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    backgroundColor: Colors.primary3,
    borderRadius: 10,
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
