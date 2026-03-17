import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
export default function WhatDrivesUsView(props) {
  const { width } = useWindowDimensions();
  const isPhone = width <= 430;
  return (
    <View style={[styles.container, isPhone && { paddingVertical: 10 }]}>
      <View style={styles.container1}>
        <Ionicons name={props.icon} size={32} color={Colors.gray} />
      </View>
      <Text style={[styles.text, isPhone && styles.textPhone]}>
        {props.text}
      </Text>
      <Text style={[styles.text1, isPhone && styles.text1Phone]}>
        {props.text1}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary2,
    width: '100%',
    maxWidth: 320,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white01,
    marginHorizontal: 10,
    marginVertical: 10,
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
  textPhone: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 10,
  },
  text1: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 26,
    color: Colors.lighterBlue,
  },
  text1Phone: {
    lineHeight: 20,
  },
});
