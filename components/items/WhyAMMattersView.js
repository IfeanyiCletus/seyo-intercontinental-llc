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
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

const windowWidth = Dimensions.get('window').width;
let divider = windowWidth >= 1281 ? 7.5 : 6.5;

export default function WhyAMMattersView(props) {
  const theme = useColorScheme();

  return (
    <ThemedView
      style={[
        styles.container,
        theme === 'light' ? styles.pinkContainer : styles.dark,
      ]}
    >
      <ThemedView style={styles.container1}>
        <Ionicons name={props.icon} size={24} color={Colors.red} />
      </ThemedView>
      <ThemedText style={styles.text}>{props.text}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth / divider,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  container1: {
    backgroundColor: Colors.pink,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  pinkContainer: {
    backgroundColor: Colors.lightPink,
    borderWidth: 1,
    borderColor: Colors.pink,
  },

  text: {
    fontSize: 14,
    fontFamily: 'light',
    textAlign: 'center',
  },
  dark: {
    borderWidth: 1,
    borderColor: Colors.white01,
  },
});
