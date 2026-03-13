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

export default function AboutUsHero(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/about_us_hero.png')}
      style={styles.container}
    >
      <View>
        <ThemedText
          style={[styles.text, theme === 'light' && { color: Colors.white }]}
        >
          About Seyo
        </ThemedText>
        <ThemedText
          style={[styles.text, theme === 'light' && { color: Colors.white }]}
        >
          INTERCONTINENTAL
        </ThemedText>
      </View>
      <View style={{ marginTop: 20 }}>
        <ThemedText
          style={[styles.text1, theme === 'light' && { color: Colors.gray }]}
        >
          Connecting the world through mentorship and professional guidance
        </ThemedText>
      </View>
      <View style={styles.container1}>
        <Ionicons name={'location-outline'} color={Colors.gray} size={20} />
        <ThemedText
          style={[styles.text2, theme === 'light' && { color: Colors.gray }]}
        >
          Cheyenne, Wyoming, USA
        </ThemedText>
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
  },
  text: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  text1: {
    fontSize: 20,
    fontFamily: 'light',
    lineHeight: 32,
  },
  text2: {
    fontSize: 18,
    fontFamily: 'light',
    lineHeight: 32,
  },
});
