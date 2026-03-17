import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import WhyAMMattersView from './WhyAMMattersView';

export default function WhyAMMatters(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ThemedView
      style={{ alignItems: 'center', paddingHorizontal: isPhone ? 16 : 24 }}
    >
      <ThemedText
        style={[
          styles.text,
          isTablet && styles.textTablet,
          isPhone && styles.textPhone,
        ]}
      >
        Why ACCESS MENTOR Matters
      </ThemedText>
      <ThemedView style={styles.container}></ThemedView>
      <ThemedView
        style={[
          styles.container1,
          {
            width: width >= 1281 ? '65%' : isTablet ? '100%' : '75%',
            paddingHorizontal: isPhone ? 12 : 20,
          },
        ]}
      >
        <ThemedText style={[styles.text1, isPhone && styles.text1Phone]}>
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
  },
  container2: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
    flexWrap: 'wrap',
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
    textAlign: 'center',
  },
  textTablet: {
    fontSize: 30,
    lineHeight: 38,
  },
  textPhone: {
    fontSize: 26,
    lineHeight: 32,
  },
  text1: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
    textAlign: 'center',
  },
  text1Phone: {
    fontSize: 18,
    lineHeight: 28,
  },
});
