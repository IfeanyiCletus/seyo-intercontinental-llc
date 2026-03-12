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

export default function SolutionView(props) {
  const theme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <Ionicons name={props.icon} color={Colors.primary} size={24} />
      <ThemedText style={styles.text}>{props.text}</ThemedText>
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
