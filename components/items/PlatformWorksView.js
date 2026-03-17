import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function PlatformWorksView(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isPhone = width <= 430;
  return (
    <ThemedView
      style={[
        styles.container,
        theme === 'light' && {
          backgroundColor: Colors.white,
          borderColor: Colors.gray,
        },
      ]}
    >
      <ThemedView style={styles.stepBadge}>
        <ThemedText style={styles.text}>{props.text}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.container1}>
        <Ionicons name={props.icon} color={Colors.primary} size={30} />
      </ThemedView>
      <ThemedText style={styles.text1}>{props.text1}</ThemedText>
      <ThemedText
        style={[styles.text2, isPhone && styles.text2Phone]}
      >
        {props.text2}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.white01,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    position: 'relative',
    width: '100%',
    maxWidth: 340,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  container1: {
    backgroundColor: Colors.secondary,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  stepBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{ translateX: -15 }, { translateY: -15 }],
    backgroundColor: Colors.primary,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'bold',
  },
  text1: {
    fontFamily: 'bold',
    fontSize: 19,
    lineHeight: 28,
    marginVertical: 20,
  },
  text2: {
    fontFamily: 'light',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10,
  },
  text2Phone: {
    fontSize: 13,
    lineHeight: 20,
  },
});
