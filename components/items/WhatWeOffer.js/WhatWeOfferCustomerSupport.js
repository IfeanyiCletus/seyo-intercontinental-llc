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

export default function WhatWeOfferCustomerSupport(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/section.png')}
      style={styles.container}
    >
      <View style={{ width: windowWidth / 3 }}>
        <View style={styles.container1}>
          <Ionicons name="call-outline" size={22} color={Colors.white} />
          <Text style={[styles.text, { marginLeft: 10 }]}>Service 05</Text>
        </View>
        <ThemedText style={styles.text1}>24/7 Customer Support</ThemedText>

        <View style={styles.border}></View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text5}>
            We recognize that our clients operate across different time zones
            and may need assistance at any hour. Our online call center provides
            prompt, professional support whenever you need it.
          </Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons name="globe-outline" size={28} color={Colors.neutral} />
          </View>
          <Text style={styles.text2}>Support across all time zones</Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="construct-outline"
              size={28}
              color={Colors.neutral}
            />
          </View>
          <Text style={styles.text2}>Technical issue resolution</Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={28} color={Colors.neutral} />
          </View>
          <Text style={styles.text2}>Platform guidance and training</Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons name="shield-outline" size={28} color={Colors.neutral} />
          </View>
          <Text style={styles.text2}>Security and privacy assistance</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text2}>
            <Text style={{ fontFamily: 'medium' }}>Our commitment:</Text>{' '}
            Distance and time differences never prevent clients from receiving
            the help they need.
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../../../assets/images/screen1440/what-we-offer-customer-support.png')}
          width={652}
          height={676}
          style={{ borderRadius: 20 }}
        />
      </View>
    </ImageBackground>
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
    backgroundColor: Colors.primary3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: windowWidth > 1280 ? '30%' : '35%',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: Colors.primary2,
    marginBottom: 20,
  },
  container2: {
    backgroundColor: Colors.white05,
    width: '90%',
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 20,
    borderWidth: 1,
  },

  container3: {
    backgroundColor: Colors.primary2,
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  container247: {
    flexDirection: 'row',
    backgroundColor: Colors.primary2,
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    fontFamily: 'bold',
    color: Colors.white,
  },
  text1: {
    fontFamily: 'bold',
    fontSize: 45,
    lineHeight: 48,
    color: Colors.white,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'light',
    color: Colors.neutral,
    marginLeft: 20,
  },

  text5: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
    color: Colors.gray,
  },

  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
    marginVertical: 30,
  },
});
