import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import ExpertiseView from './ExpertiseView';

export default function OurExpertise(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  return (
    <ThemedView
      style={[
        styles.container,
        {
          minHeight: isTablet ? undefined : 777,
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 56 : 0,
        },
        theme === 'light' && { backgroundColor: Colors.neutral },
      ]}
    >
      <ThemedText style={[styles.text, isPhone && styles.textPhone]}>
        OUR EXPERTISE
      </ThemedText>
      <ThemedText
        style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}
      >
        Comprehensive Business Services
      </ThemedText>
      <ThemedView
        style={[
          styles.container1,
          isTablet && styles.container1Tablet,
        ]}
      >
        <ExpertiseView
          icon={'bag-add-outline'}
          text={'Business Clinic'}
          text1={'Strategic Growth'}
          text2={'Operational Audit'}
          text3={'Market Entry'}
          onPress={() => {}}
        />
        <ExpertiseView
          icon={'chatbubble-ellipses-outline'}
          text={'Guidance & Counselling'}
          text1={'Career pathing'}
          text2={'Executive Coaching'}
          text3={'Soft Skills'}
          onPress={() => {}}
        />
        <ExpertiseView
          icon={'document-text-outline'}
          text={'Business Plan Development'}
          text1={'Financial Modeling'}
          text2={'Pitch Decks'}
          text3={'Market Research'}
          onPress={() => {}}
        />
        <ExpertiseView
          icon={'school-outline'}
          text={'Training Programmes'}
          text1={'Skill Workshops'}
          text2={'Corporate Training'}
          text3={'Certifications'}
          onPress={() => {}}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    maxWidth: 1400,
  },
  container1Tablet: {
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'bold',
    color: Colors.primary,
    fontSize: 16,
    marginBottom: 20,
  },
  text1: {
    fontFamily: 'extraBold',
    fontSize: 40,
    marginBottom: 40,
    lineHeight: 44,
    textAlign: 'center',
  },
  text1Tablet: {
    fontSize: 32,
    lineHeight: 38,
  },
  text1Phone: {
    fontSize: 26,
    lineHeight: 32,
  },
  textPhone: {
    fontSize: 14,
  },
});
