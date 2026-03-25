import React from 'react';
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function WhyAMMattersView(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isPhone = width <= 430;

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
      <ThemedText style={[styles.text, isPhone && styles.textPhone]}>
        {props.text}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 240,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
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
    lineHeight: 18,
  },
  textPhone: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'medium',
  },
  dark: {
    borderWidth: 1,
    borderColor: Colors.white01,
  },
});
