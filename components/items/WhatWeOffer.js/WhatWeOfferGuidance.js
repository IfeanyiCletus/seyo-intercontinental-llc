import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  useColorScheme,
  Image,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';
export default function WhatWeOfferGuidance(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-2.png')}
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 860,
          flexDirection: isTablet ? 'column' : 'row',
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 48 : 0,
        },
      ]}
    >
      <View3 style={isTablet && styles.imageWrapTablet}>
        <Image
          source={require('../../../assets/images/screen1440/what-we-offer-guidance.png')}
          style={[styles.image, isTablet && styles.imageTablet, isPhone && styles.imagePhone]}
          resizeMode="contain"
        />
      </View3>
      <View3 style={{ width: isTablet ? '100%' : width > 1280 ? width / 3 : width / 2.5 }}>
        <View
          style={[
            styles.container1,
            { width: width > 1280 ? '30%' : isTablet ? '42%' : '40%' },
          ]}
        >
          <Ionicons name="briefcase-outline" size={22} color={Colors.red} />
          <Text style={[styles.text, { marginLeft: 20 }]}>Service 02</Text>
        </View>
        <ThemedText style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}>
          Guidance & Counselling
        </ThemedText>
        <ThemedText style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}>
          Service
        </ThemedText>
        <View style={styles.border}></View>
        <ThemedText style={[styles.text5, isPhone && styles.text5Phone]}>
          Life presents challenges that extend beyond business decisions. Our
          Guidance and Counselling section addresses personal and emotional
          concerns that affect individual wellbeing and performance.
        </ThemedText>
        <View3
          style={[
            styles.container2,
            {
              borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
            },
          ]}
        >
          <View style={{ marginLeft: 20 }}>
            <ThemedText style={[styles.text3, { marginBottom: 20 }]}>
              Our Counsellors specialize in:
            </ThemedText>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.red}
              />
              <ThemedText
                style={[styles.text2, isPhone && styles.text2Phone, { marginLeft: 20, marginBottom: 10 }]}
              >
                Marriage and family relationships
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.red}
              />
              <ThemedText
                style={[styles.text2, isPhone && styles.text2Phone, { marginLeft: 20, marginBottom: 10 }]}
              >
                Career planning and transitions
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.red}
              />
              <ThemedText
                style={[styles.text2, isPhone && styles.text2Phone, { marginLeft: 20, marginBottom: 10 }]}
              >
                Addiction recovery support
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.red}
              />
              <ThemedText
                style={[styles.text2, isPhone && styles.text2Phone, { marginLeft: 20, marginBottom: 10 }]}
              >
                Managing depression and emotional health
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.red}
              />
              <ThemedText
                style={[styles.text2, isPhone && styles.text2Phone, { marginLeft: 20, marginBottom: 10 }]}
              >
                Educational guidance for students
              </ThemedText>
            </View>
          </View>
        </View3>

        <View style={styles.container3}>
          <Text style={[styles.text4, isPhone && styles.text4Phone]}>
            <Text style={styles.text3}>Same revenue-sharing structure: </Text>
            Fair compensation for counsellors while maintaining affordable rates
            for clients who need support.
          </Text>
        </View>
      </View3>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: Colors.lightPink,
    marginBottom: 20,
    borderColor: Colors.pink,
  },
  container2: {
    backgroundColor: Colors.white05,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 20,
    borderWidth: 1,
  },
  container3: {
    backgroundColor: Colors.lightPink,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 20,
    padding: 20,
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'bold',
    color: Colors.red,
  },
  text1: {
    fontFamily: 'bold',
    fontSize: 45,
    lineHeight: 45,
  },
  text1Tablet: {
    fontSize: 34,
    lineHeight: 38,
  },
  text1Phone: {
    fontSize: 28,
    lineHeight: 32,
  },
  text2: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 24,
    color: Colors.black,
  },
  text2Phone: {
    fontSize: 14,
    lineHeight: 22,
  },
  text3: {
    fontSize: 16,
    fontFamily: 'bold',
    lineHeight: 24,
    color: Colors.black,
  },
  text4: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 24,
    color: Colors.black,
  },
  text4Phone: {
    fontSize: 14,
    lineHeight: 22,
  },
  text5: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
  },
  text5Phone: {
    lineHeight: 24,
  },
  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.pink,
    marginBottom: 30,
    marginTop: 20,
  },
  imageWrapTablet: {
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 652,
    height: 576,
  },
  imageTablet: {
    width: 500,
    height: 442,
  },
  imagePhone: {
    width: 300,
    height: 265,
  },
});
