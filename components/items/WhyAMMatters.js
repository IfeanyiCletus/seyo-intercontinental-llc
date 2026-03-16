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
import WhyAMMattersView from './WhyAMMattersView';

const windowWidth = Dimensions.get('window').width;

export default function WhyAMMatters(props) {
  const theme = useColorScheme();

  return (
    <ThemedView style={{ alignItems: 'center' }}>
      <ThemedText style={styles.text}>Why ACCESS MENTOR Matters</ThemedText>
      <ThemedView style={styles.container}></ThemedView>
      <ThemedView style={styles.container1}>
        <ThemedText style={styles.text1}>
          Traditional mentorship often faces barriers such as:
        </ThemedText>
        <ThemedView style={styles.container2}>
          <WhyAMMattersView
            icon={'cash-outline'}
            text={'High consulting fees'}
          />
          <WhyAMMattersView
            icon={'location-outline'}
            text={'Geographic limitations'}
          />
          <WhyAMMattersView
            icon={'language-outline'}
            text={'Language barriers'}
          />
          <WhyAMMattersView
            icon={'globe-outline'}
            text={'Limited access in developing regions'}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
    width: 100,
    marginVertical: 10,
  },
  container1: {
    marginTop: 50,
    marginBottom: 40,
    borderRadius: 20,
    overflow: 'visible',
    paddingVertical: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    width: windowWidth >= 1281 ? '65%' : '75%',
  },
  container2: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  pinkContainer: {
    backgroundColor: Colors.lightPink,
    borderWidth: 1,
    borderColor: Colors.pink,
  },

  text: {
    fontFamily: 'bold',
    fontSize: 46,
    lineHeight: 48,
  },
  text1: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
    textAlign: 'center',
  },
});
