import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function WhetherYouAreView(props) {
  const { width } = useWindowDimensions();
  const isPhone = width <= 430;

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-done-outline" size={30} color={Colors.gray} />
      <Text style={[styles.text3, isPhone && styles.text3Phone]}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white01,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  container1: {
    backgroundColor: Colors.secondary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  text3: {
    fontFamily: 'light',
    lineHeight: 22,
    fontSize: 16,
    color: Colors.gray,
    marginLeft: 20,
    flexShrink: 1,
  },
  text3Phone: {
    lineHeight: 20,
    fontSize: 15,
  },
});
