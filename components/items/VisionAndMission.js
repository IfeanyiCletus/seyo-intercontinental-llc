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

const windowWidth = Dimensions.get('window').width;

export default function VisionAndMission(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View2
      source={
        theme === 'light' &&
        require('../../assets/images/screen1440/gradient-2.png')
      }
      style={styles.container}
    >
      <View3 style={{ marginVertical: 30, alignSelf: 'center' }}>
        <ThemedText style={styles.text1}>
          OUR VISI
          <ThemedText style={styles.headerText}>ON AND</ThemedText> MISSION
        </ThemedText>
      </View3>
      <View3 style={styles.container1}>
        <View3
          style={[
            styles.container3,
            theme === 'light' && { backgroundColor: Colors.white05 },
          ]}
        >
          <View3 style={[styles.container4]}>
            <Ionicons name="globe" color={Colors.primary} size={30} />
          </View3>
          <View3
            style={theme === 'light' && { backgroundColor: Colors.white05 }}
          >
            <ThemedText style={styles.text2}>Our Vision</ThemedText>
            <View3 style={{ marginTop: 20 }}>
              <ThemedText style={styles.text3}>
                We aim to become the world’s most trusted digital platform for
                professional mentorship, business guidance, and personal
                counselling. a goal is to connect knowledge with need, bridging
                cultural differences and bringing practical solutions to people
                regardless of their location or background.{' '}
              </ThemedText>
            </View3>
          </View3>
        </View3>
        <View3
          style={[
            styles.container3,
            theme === 'light' ? { backgroundColor: Colors.white05 } : {},
          ]}
        >
          <View3 style={[styles.container4]}>
            <Ionicons name="airplane" color={Colors.primary} size={30} />
          </View3>
          <View3
            style={theme === 'light' ? { backgroundColor: Colors.white05 } : {}}
          >
            <ThemedText style={styles.text2}>Our Mission</ThemedText>
            <View3 style={{ marginTop: 20 }}>
              <ThemedText style={styles.text3}>
                We provide accessible and affordable mentorship and counselling
                services through a secure online platform that operates in
                multiple languages. Our focus extends beyond individual
                consultations to include knowledge sharing, business growth
                support, and personal development opportunities for clients
                worldwide. We maintain high professional standards while
                ensuring our services remain within reach for organizations and
                individuals who need them most.{' '}
              </ThemedText>
            </View3>
          </View3>
        </View3>
      </View3>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    alignSelf: 'center',
    height: 973,
    // marginBottom: 40,
    marginTop: 120,
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },

  text1: {
    fontSize: 40,
    fontFamily: 'medium',
  },
  text2: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'bold',
  },
  text3: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'light',
  },
  container2: {
    width: '30%',
    marginHorizontal: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingVertical: 20,
  },
  container3: {
    width: '20%',
    marginHorizontal: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingVertical: 20,
  },
  container4: {
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    padding: 10,
    width: 50,
    marginBottom: 30,
  },
  headerText: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primary,
  },
});
