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

export default function SponsporPartnerView(props) {
  const { width } = useWindowDimensions();
  const isPhone = width <= 430;
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
      <ThemedText style={[styles.text, isPhone && styles.textPhone]}>
        {props.text}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 260,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
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
  textPhone: {
    fontSize: 13,
    lineHeight: 20,
  },
});
