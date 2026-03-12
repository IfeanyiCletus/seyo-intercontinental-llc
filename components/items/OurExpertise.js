import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import ExpertiseView from './ExpertiseView';

const windowWidth = Dimensions.get('window').width;

export default function OurExpertise(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View3
      style={[
        styles.container,
        theme === 'light' && { backgroundColor: Colors.neutral },
      ]}
    >
      <ThemedText style={styles.text}>OUR EXPERTISE</ThemedText>
      <ThemedText style={styles.text1}>
        Comprehensive Business Services
      </ThemedText>
      <View3 style={styles.container1}>
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
      </View3>
    </View3>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 777,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  },
});
