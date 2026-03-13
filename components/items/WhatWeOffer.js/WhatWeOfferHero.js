import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
  Pressable,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';
import WhyAMMattersView from '../WhyAMMattersView';

const windowWidth = Dimensions.get('window').width;

export default function WhatWeOfferHero(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/what-we-offer-hero.png')}
      style={styles.container}
    >
      <View>
        <ThemedText style={styles.text}>How Our Platform Works</ThemedText>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <ThemedText style={styles.text1}>
          Comprehensive services designed to support your personal and
        </ThemedText>
        <ThemedText style={styles.text1}>
          professional growth across the globe
        </ThemedText>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.container1}>
          <Ionicons name={'time-outline'} color={Colors.gray} size={20} />
          <ThemedText style={styles.text2}>Flexible hours</ThemedText>
        </View>
        <View style={styles.container1}>
          <Ionicons name={'globe-outline'} color={Colors.gray} size={20} />
          <ThemedText style={styles.text2}>Global Access</ThemedText>
        </View>
        <View style={styles.container1}>
          <Ionicons
            name={'shield-checkmark-outline'}
            color={Colors.gray}
            size={20}
          />
          <ThemedText style={styles.text2}>Secure Platform</ThemedText>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 720,
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
  },
  text: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'light',
    lineHeight: 32,
    color: Colors.gray,
  },
  text2: {
    fontSize: 18,
    fontFamily: 'light',
    lineHeight: 32,
    color: Colors.gray,
    marginLeft: 10,
  },
});
