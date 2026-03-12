import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import Colors from '../constants/Colors';

const ThemedView = (props) => {
  const colorScheme = useColorScheme();
  return (
    <View
      onLayout={props.onLayout}
      style={StyleSheet.flatten([
        colorScheme === 'dark' && {
          backgroundColor: Colors.dark.background,
        },
        colorScheme === 'light' && {
          backgroundColor: Colors.white,
        },
        styles.line,
        props.style,
      ])}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ThemedView;
