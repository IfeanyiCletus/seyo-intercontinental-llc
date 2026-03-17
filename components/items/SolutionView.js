import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function SolutionView(props) {
  const { width } = useWindowDimensions();
  const isPhone = width <= 430;

  return (
    <ThemedView style={styles.container}>
      <Ionicons name={props.icon} color={Colors.primary} size={24} />
      <ThemedText style={[styles.text, isPhone && styles.textPhone]}>
        {props.text}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'bold',
    lineHeight: 24,
    marginLeft: 20,
    color: Colors.black,
    flexShrink: 1,
  },
  textPhone: {
    fontSize: 13,
    lineHeight: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    width: '90%',
    backgroundColor: Colors.lightBlue,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
