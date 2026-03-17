import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedText from '../ThemedText';

export default function WhatWeOfferCustomerSupport(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/section.png')}
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 823,
          flexDirection: isTablet ? 'column' : 'row',
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 48 : 0,
        },
      ]}
    >
      <View style={{ width: isTablet ? '100%' : width / 3 }}>
        <View
          style={[
            styles.container1,
            {
              width:
                width > 1280
                  ? '30%'
                  : isTablet
                    ? isPhone
                      ? '40%'
                      : '28%'
                    : '35%',
            },
          ]}
        >
          <Ionicons name="call-outline" size={22} color={Colors.white} />
          <Text style={[styles.text, { marginLeft: 10 }]}>Service 05</Text>
        </View>
        <ThemedText
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
          ]}
        >
          24/7 Customer Support
        </ThemedText>

        <View style={styles.border}></View>
        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.text5, isPhone && styles.text5Phone]}>
            We recognize that our clients operate across different time zones
            and may need assistance at any hour. Our online call center provides
            prompt, professional support whenever you need it.
          </Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons name="globe-outline" size={28} color={Colors.neutral} />
          </View>
          <Text style={[styles.text2, isPhone && styles.text2Phone]}>
            Support across all time zones
          </Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="construct-outline"
              size={28}
              color={Colors.neutral}
            />
          </View>
          <Text style={[styles.text2, isPhone && styles.text2Phone]}>
            Technical issue resolution
          </Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={28} color={Colors.neutral} />
          </View>
          <Text style={[styles.text2, isPhone && styles.text2Phone]}>
            Platform guidance and training
          </Text>
        </View>
        <View style={styles.container247}>
          <View style={styles.iconContainer}>
            <Ionicons name="shield-outline" size={28} color={Colors.neutral} />
          </View>
          <Text style={[styles.text2, isPhone && styles.text2Phone]}>
            Security and privacy assistance
          </Text>
        </View>
        <View style={styles.container3}>
          <Text style={[styles.text2, isPhone && styles.text2Phone]}>
            <Text style={{ fontFamily: 'medium' }}>Our commitment:</Text>{' '}
            Distance and time differences never prevent clients from receiving
            the help they need.
          </Text>
        </View>
      </View>
      {!isPhone && !isTablet && (
        <View style={isTablet && styles.imageWrapTablet}>
          <Image
            source={require('../../../assets/images/screen1440/what-we-offer-customer-support.png')}
            style={[
              styles.image,
              isTablet && styles.imageTablet,
              isPhone && styles.imagePhone,
            ]}
            resizeMode="contain"
          />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: Colors.primary3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
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
  text1Tablet: {
    fontSize: 36,
    lineHeight: 40,
  },
  text1Phone: {
    fontSize: 30,
    lineHeight: 34,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'light',
    color: Colors.neutral,
    marginLeft: 20,
  },
  text2Phone: {
    fontSize: 13,
    lineHeight: 20,
  },

  text5: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
    color: Colors.gray,
  },
  text5Phone: {
    lineHeight: 24,
  },

  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
    marginVertical: 30,
  },
  imageWrapTablet: {
    alignItems: 'center',
    marginTop: 24,
  },
  image: {
    width: 652,
    height: 676,
    borderRadius: 20,
  },
  imageTablet: {
    width: 500,
    height: 518,
  },
  imagePhone: {
    width: 300,
    height: 311,
  },
});
