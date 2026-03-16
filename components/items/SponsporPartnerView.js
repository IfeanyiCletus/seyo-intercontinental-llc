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
let divider = windowWidth > 1280 ? 6 : 4.5;
export default function SponsporPartnerView(props) {
  const theme = useColorScheme();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          borderColor: theme === 'dark' ? Colors.white01 : Colors.gray,
        },
      ]}
    >
      <ThemedView style={styles.container1}>
        <Ionicons name={props.icon} color={Colors.primary} size={24} />
      </ThemedView>
      <ThemedText style={styles.text}>{props.text}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth / divider,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  container1: {
    backgroundColor: Colors.secondary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  text: {
    fontSize: 14,
    fontFamily: 'bold',
    lineHeight: 24,
    marginTop: 20,
    textAlign: 'center',
  },
});
