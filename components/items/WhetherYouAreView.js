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

export default function WhetherYouAreView(props) {
  const theme = useColorScheme();

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-done-outline" size={30} color={Colors.gray} />
      <Text style={styles.text3}>{props.text}</Text>
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
    marginHorizontal: 20,
    width: windowWidth / 6,
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
    lineHeight: 18,
    fontSize: 16,
    color: Colors.gray,
    marginLeft: 20,
  },
});
