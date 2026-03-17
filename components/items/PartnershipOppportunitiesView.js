import React from 'react';
import {
  View,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function PartnershipOpportunitiesView(props) {
  const { width } = useWindowDimensions();
  const isPhone = width <= 430;
  const theme = useColorScheme();
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <ThemedView
      style={[
        styles.container,
        theme === 'light' && {
          backgroundColor: Colors.lightBlue,
          borderColor: Colors.gray,
        },
      ]}
    >
      <ThemedView style={styles.container1}>
        <Ionicons name={props.icon} size={24} color={Colors.white} />
      </ThemedView>
      <View3>
        <ThemedText style={[styles.text, isPhone && styles.textPhone]}>
          {props.text}
        </ThemedText>
        <ThemedText style={[styles.text, isPhone && styles.textPhone]}>
          {props.text1}
        </ThemedText>
      </View3>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.white01,
  },
  container1: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'bold',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 20,
    flexShrink: 1,
  },
  textPhone: {
    fontSize: 13,
    lineHeight: 20,
  },
});
