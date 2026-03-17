import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import PlatformWorksView from './PlatformWorksView';
import PercentageView from './PercentageView';

export default function PlatformWorks(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  const steps = [
    {
      icon: 'person-add-outline',
      text: '1',
      text1: 'Select your mentor or counsellor',
      text2: 'Browse through verified professionals in your area of need',
    },
    {
      icon: 'calendar-clear-outline',
      text: '2',
      text1: 'View availability & book a session',
      text2: 'See real-time availability and book a time that works for you',
    },
    {
      icon: 'videocam-outline',
      text: '3',
      text1: 'Attend your session online',
      text2: 'Connect with your mentor through our secure video platform',
    },
    {
      icon: 'card-outline',
      text: '4',
      text1: 'Make secure payment',
      text2: 'Transparent pricing with secure payment processing',
    },
    {
      icon: 'globe-outline',
      text: '5',
      text1: 'Choose your preferred language',
      text2: 'Select from multiple international languages for your session',
    },
    {
      icon: 'analytics-outline',
      text: '6',
      text1: 'Track progress',
      text2: 'Monitor your growth and book follow-up sessions as needed',
    },
  ];
  return (
    <ThemedView
      style={{
        marginVertical: isPhone ? 48 : 70,
        alignItems: 'center',
        paddingHorizontal: isPhone ? 16 : 24,
      }}
    >
      <ThemedView>
        <ThemedText style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}>
          How the Platform Works
        </ThemedText>
        <ThemedText style={[styles.text2, isTablet && styles.text2Tablet, isPhone && styles.text2Phone]}>
          Simple, transparent, and secure process from booking to completion
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.grid}>
        {steps.map((step) => (
          <PlatformWorksView key={step.text} {...step} />
        ))}
      </ThemedView>
      <ThemedView
        style={[
          styles.container1,
          isTablet && styles.container1Tablet,
          theme === 'light' && { backgroundColor: Colors.neutral },
        ]}
      >
        <ThemedText style={[styles.text3, isPhone && styles.text3Phone]}>
          Fair & Transparent Revenue Model
        </ThemedText>
        <ThemedView
          style={[
            styles.container2,
            isTablet && styles.container2Tablet,
            theme === 'light' && { backgroundColor: Colors.neutral },
          ]}
        >
          <PercentageView
            text={'70%'}
            text1={'Goes to Mentors'}
            text2={'Fair compensation for sharing their expertise and time'}
          />
          <PercentageView
            text={'30%'}
            text1={'Platform Operations'}
            text2={'Covers administration, technology and support services'}
          />
        </ThemedView>
        <ThemedView>
          <ThemedText style={[styles.text4, isPhone && styles.text4Phone]}>
            Each mentor has a performance and earnings dashboard for full
            transparency.
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.border}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
    marginVertical: 50,
    borderRadius: 10,
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  container1Tablet: {
    width: '100%',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  container2Tablet: {
    justifyContent: 'center',
  },
  text1: {
    fontSize: 45,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  text1Tablet: {
    fontSize: 34,
  },
  text1Phone: {
    fontSize: 28,
  },
  text2: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'light',
    marginBottom: 50,
    textAlign: 'center',
  },
  text2Tablet: {
    marginBottom: 32,
  },
  text2Phone: {
    fontSize: 16,
    lineHeight: 24,
  },
  text3: {
    fontFamily: 'bold',
    fontSize: 23,
    lineHeight: 32,
  },
  text4: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'light',
    textAlign: 'center',
  },
  text3Phone: {
    textAlign: 'center',
  },
  text4Phone: {
    lineHeight: 22,
  },
  border: {
    borderTopWidth: 1,
    borderColor: Colors.gray,
    marginVertical: 20,
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
