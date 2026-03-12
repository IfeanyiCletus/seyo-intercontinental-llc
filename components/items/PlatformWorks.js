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
import PlatformWorksView from './PlatformWorksView';
import PercentageView from './PercentageView';

const windowWidth = Dimensions.get('window').width;

export default function PlatformWorks(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <ThemedView style={{ marginVertical: 70, alignItems: 'center' }}>
      <ThemedView>
        <ThemedText style={styles.text1}>How the Platform Works</ThemedText>
        <ThemedText style={styles.text2}>
          Simple, transparent, and secure process from booking to completion
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ flexDirection: 'row' }}>
        <PlatformWorksView
          icon={'person-add-outline'}
          text={'1'}
          text1={'Select your mentor or counsellor'}
          text2={'Browse through verified professionals in your area of need'}
        />
        <PlatformWorksView
          icon={'calendar-clear-outline'}
          text={'2'}
          text1={'View availability & book a session'}
          text2={
            'See real-time availability and book a time that works for you'
          }
        />
        <PlatformWorksView
          icon={'videocam-outline'}
          text={'3'}
          text1={'Attend your session online'}
          text2={'Connect with your mentor through our secure video platform'}
        />
      </ThemedView>
      <ThemedView style={{ flexDirection: 'row', marginTop: 30 }}>
        <PlatformWorksView
          icon={'card-outline'}
          text={'4'}
          text1={'Make secure payment'}
          text2={'Transparent pricing with secure payment processing'}
        />
        <PlatformWorksView
          icon={'globe-outline'}
          text={'5'}
          text1={'Choose your preferred language'}
          text2={
            'Select from multiple international languages for your session'
          }
        />
        <PlatformWorksView
          icon={'analytics-outline'}
          text={'6'}
          text1={'Track progress'}
          text2={'Monitor your growth and book follow-up sessions as needed'}
        />
      </ThemedView>
      <ThemedView
        style={[
          styles.container1,
          theme === 'light' && { backgroundColor: Colors.neutral },
        ]}
      >
        <ThemedText style={styles.text3}>
          Fair & Transparent Revenue Model
        </ThemedText>
        <ThemedView
          style={[
            styles.container2,
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
        <View3>
          <ThemedText style={styles.text4}>
            Each mentor has a performance and earnings dashboard for full
            transparency.
          </ThemedText>
        </View3>
      </ThemedView>
      <ThemedView style={styles.border}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 342,
    width: '65%',
    marginVertical: 50,
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  text1: {
    fontSize: 45,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  text2: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'light',
    marginBottom: 50,
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
  },
  border: {
    borderTopWidth: 1,
    borderColor: Colors.gray,
    marginVertical: 20,
    width: windowWidth,
  },
});
