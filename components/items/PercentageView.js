import React from 'react';
import {
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function PercentageView(props) {
  const { width } = useWindowDimensions();
  const isPhone = width <= 430;

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>{props.text}</ThemedText>
      <ThemedText style={styles.text1}>{props.text1}</ThemedText>
      <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
        {props.text2}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 320,
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.white01,
  },

  text: {
    fontSize: 47,
    fontFamily: 'bold',
    lineHeight: 49,
    color: Colors.primary,
  },
  text1: {
    fontSize: 18,
    fontFamily: 'bold',
    lineHeight: 28,
    marginTop: 10,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 18,
  },
  text2Phone: {
    fontSize: 13,
    lineHeight: 20,
  },
});
