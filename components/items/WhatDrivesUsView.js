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

export default function WhatDrivesUsView(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Ionicons name={props.icon} size={32} color={Colors.gray} />
      </View>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.text1}>{props.text1}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary2,
    width: windowWidth / 5,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white01,
    marginHorizontal: 10,
  },
  container1: {
    backgroundColor: Colors.primary3,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  text: {
    fontSize: 18,
    fontFamily: 'medium',
    lineHeight: 26,
    color: Colors.lightBlue,
    marginVertical: 20,
  },
  text1: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 26,
    color: Colors.lighterBlue,
  },
});
