import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
  Pressable,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';
import WhyAMMattersView from '../WhyAMMattersView';

const windowWidth = Dimensions.get('window').width;
let divider = windowWidth > 1280 ? 4 : 2.5;
export default function AboutUsOurCompany(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-1.png')}
      style={styles.container}
    >
      <View3 style={{ width: windowWidth / divider }}>
        <View
          style={[
            styles.container1,
            { borderColor: theme === 'dark' ? Colors.white05 : Colors.gray },
          ]}
        >
          <Text style={styles.text}>Our Company</Text>
        </View>
        <ThemedText style={styles.text1}>About Us</ThemedText>
        <View style={styles.border}></View>
        <View3 style={{ marginBottom: 20 }}>
          <ThemedText style={styles.text2}>
            <ThemedText style={{ fontFamily: 'bold' }}>
              SEYO INTERCONTINENTAL LLC
            </ThemedText>{' '}
            is an American-based company committed to solving real challenges
            faced by entrepreneurs and individuals worldwide. We understand that
            access to quality mentorship and professional guidance remains
            limited in many parts of the world.
          </ThemedText>
        </View3>
        <View3 style={{ marginBottom: 20 }}>
          <ThemedText style={styles.text2}>
            This gap inspired the creation of{' '}
            <ThemedText style={{ fontFamily: 'bold', color: Colors.primary }}>
              ACCESS MENTOR
            </ThemedText>{' '}
            , our flagship digital platform that connects people with
            experienced professionals who can guide them through business
            decisions, personal challenges, and career development.
          </ThemedText>
        </View3>
        <View3 style={{ flexDirection: 'row' }}>
          <View
            style={[
              styles.container3,
              {
                borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
              },
            ]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="globe-outline" color={Colors.primary} size={32} />
              <ThemedText style={styles.text3}>Global</ThemedText>
            </View>
            <ThemedText style={styles.text4}>Worldwide Reach</ThemedText>
          </View>
          <View
            style={[
              styles.container3,
              {
                borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
                marginHorizontal: 20,
              },
            ]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="people-outline"
                color={Colors.primary}
                size={32}
              />
              <ThemedText style={styles.text3}>Expert</ThemedText>
            </View>
            <ThemedText style={styles.text4}>Mentors Network</ThemedText>
          </View>
        </View3>
      </View3>
      <View3>
        <Image
          source={require('../../../assets/images/screen1440/about_us_usabased-image.png')}
          width={684}
          height={608}
        />
      </View3>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 973,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container1: {
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: windowWidth > 1280 ? '30%' : '45%',
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    fontFamily: 'bold',
    color: Colors.primary,
  },
  text1: {
    fontFamily: 'bold',
    fontSize: 45,
    lineHeight: 48,
    marginVertical: 20,
  },
  text2: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
  },
  text3: {
    fontSize: 28,
    fontFamily: 'bold',
    lineHeight: 36,
    color: Colors.black,
    marginLeft: 20,
  },
  text4: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 24,
    color: Colors.black,
  },
  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
    marginBottom: 30,
  },
  container3: {
    backgroundColor: Colors.lightBlue,
    paddingVertical: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
});
