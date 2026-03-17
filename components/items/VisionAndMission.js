import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function VisionAndMission(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View2
      source={
        theme === 'light' &&
        require('../../assets/images/screen1440/gradient-2.png')
      }
      style={[
        styles.container,
        {
          width,
          height: isTablet ? 'auto' : 973,
          marginTop: isPhone ? 48 : isTablet ? 72 : 120,
          paddingBottom: isTablet ? 48 : 0,
        },
      ]}
    >
      <View3 style={{ marginVertical: isPhone ? 20 : 30, alignSelf: 'center' }}>
        <ThemedText
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
          ]}
        >
          OUR VISI
          <ThemedText style={styles.headerText}>ON AND</ThemedText> MISSION
        </ThemedText>
      </View3>
      <View3
        style={[
          styles.container1,
          isTablet && styles.container1Tablet,
          {
            width: isPhone ? '100%' : isTablet ? '92%' : '100%',
            paddingHorizontal: isPhone ? 16 : 0,
          },
        ]}
      >
        <View3
          style={[
            styles.container3,
            isTablet && styles.container3Tablet,
            isPhone && styles.container3Phone,
            theme === 'light' && { backgroundColor: Colors.white05 },
          ]}
        >
          <View3 style={[styles.container4]}>
            <Ionicons
              name="globe"
              color={Colors.primary}
              size={isPhone ? 24 : 30}
            />
          </View3>
          <View3
            style={theme === 'light' && { backgroundColor: Colors.white05 }}
          >
            <ThemedText
              style={[
                styles.text2,
                isTablet && styles.text2Tablet,
                isPhone && styles.text2Phone,
              ]}
            >
              Our Vision
            </ThemedText>
            <View3 style={{ marginTop: 20 }}>
              <ThemedText
                style={[
                  styles.text3,
                  isTablet && styles.text3Tablet,
                  isPhone && styles.text3Phone,
                ]}
              >
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
            isTablet && styles.container3Tablet,
            isPhone && styles.container3Phone,
            theme === 'light' ? { backgroundColor: Colors.white05 } : {},
          ]}
        >
          <View3 style={[styles.container4]}>
            <Ionicons
              name="airplane"
              color={Colors.primary}
              size={isPhone ? 24 : 30}
            />
          </View3>
          <View3
            style={theme === 'light' ? { backgroundColor: Colors.white05 } : {}}
          >
            <ThemedText
              style={[
                styles.text2,
                isTablet && styles.text2Tablet,
                isPhone && styles.text2Phone,
              ]}
            >
              Our Mission
            </ThemedText>
            <View3 style={{ marginTop: 20 }}>
              <ThemedText
                style={[
                  styles.text3,
                  isTablet && styles.text3Tablet,
                  isPhone && styles.text3Phone,
                ]}
              >
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
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  container1Tablet: {
    flexDirection: 'column',
    gap: 20,
  },

  text1: {
    fontSize: 40,
    fontFamily: 'medium',
  },
  text1Tablet: {
    fontSize: 32,
    textAlign: 'center',
  },
  text1Phone: {
    fontSize: 26,
  },
  text2: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'bold',
  },
  text2Tablet: {
    fontSize: 20,
    lineHeight: 28,
  },
  text2Phone: {
    fontSize: 18,
    lineHeight: 26,
  },
  text3: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'light',
  },
  text3Tablet: {
    fontSize: 15,
    lineHeight: 24,
  },
  text3Phone: {
    fontSize: 14,
    lineHeight: 22,
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
  container3Tablet: {
    width: '100%',
    marginHorizontal: 0,
    paddingHorizontal: 28,
  },
  container3Phone: {
    paddingHorizontal: 20,
    paddingVertical: 18,
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
