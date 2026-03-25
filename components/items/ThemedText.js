import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  useColorScheme,
} from 'react-native';
import Colors from '../constants/Colors';

const ThemedText = (props) => {
  const colorScheme = useColorScheme();

  return (
    <View>
      <Text
        style={StyleSheet.flatten([
          colorScheme === 'dark' && {
            color: Colors.dark.text,
          },
          colorScheme === 'light' && {
            color: Colors.light.text,
          },
          props.type === 'default' ? { ...styles.default } : undefined,
          props.type === 'title' ? { ...styles.title } : undefined,
          props.type === 'defaultSemiBold'
            ? { ...styles.defaultSemiBold }
            : undefined,
          props.type === 'subtitle' ? { ...styles.subtitle } : undefined,
          props.type === 'link' ? { ...styles.link } : undefined,
          props.type === 'medium' ? { ...styles.medium } : undefined,
          props.type === 'navigator' ? { ...styles.navigator } : undefined,
          props.type === 'light' ? { ...styles.light } : undefined,
          props.style,
        ])}
      >
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'bold',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'medium',
  },
  title: {
    fontSize: 36,
    lineHeight: 32,
    fontFamily: 'bold',
  },
  subtitle: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'light',
    fontStyle: 'italic',
  },
  medium: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'light',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    // color: '#0a7ea4',
  },
  navigator: {
    fontSize: 16,
    fontFamily: 'medium',
  },
  light: {
    fontSize: 18,
    fontFamily: 'light',
    // fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default ThemedText;
