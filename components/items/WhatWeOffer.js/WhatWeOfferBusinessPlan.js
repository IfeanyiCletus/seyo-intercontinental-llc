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
export default function WhatWeOfferBusinessPlan(props) {
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
          minHeight: isTablet ? undefined : 973,
          flexDirection: isTablet ? 'column' : 'row',
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 48 : 0,
        },
      ]}
    >
      <View3
        style={{
          width: isTablet ? '100%' : width > 1280 ? width / 3 : width / 2.5,
        }}
      >
        <View style={[styles.container1, { width: isTablet ? '40%' : '30%' }]}>
          <Ionicons
            name="document-text-outline"
            size={22}
            color={Colors.purple}
          />
          <Text style={[styles.text, { marginLeft: 10 }]}>Service 03</Text>
        </View>
        <ThemedText
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
          ]}
        >
          Business Plan
        </ThemedText>
        <ThemedText
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
          ]}
        >
          Development
        </ThemedText>
        <View style={styles.border}></View>
        <View3 style={{ marginBottom: 20 }}>
          <ThemedText style={[styles.text5, isPhone && styles.text5Phone]}>
            Many entrepreneurs have brilliant ideas but struggle to transform
            them into structured, actionable plans that attract investors or
            guide implementation.
          </ThemedText>
        </View3>
        <View3
          style={[
            styles.container2,
            {
              width: width > 1280 ? '90%' : '100%',
              borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
            },
          ]}
        >
          <View style={{ marginLeft: width > 1280 ? 20 : 10 }}>
            <ThemedText style={[styles.text3, { marginBottom: 20 }]}>
              Our Business Standard Package provides:
            </ThemedText>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.purple}
              />
              <ThemedText
                style={[
                  styles.text2,
                  isPhone && styles.text2Phone,
                  { marginLeft: 20, marginBottom: 10 },
                ]}
              >
                Comprehensive, customized business plans
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.purple}
              />
              <ThemedText
                style={[
                  styles.text2,
                  isPhone && styles.text2Phone,
                  { marginLeft: 20, marginBottom: 10 },
                ]}
              >
                International best practices
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.purple}
              />
              <ThemedText
                style={[
                  styles.text2,
                  isPhone && styles.text2Phone,
                  { marginLeft: 20, marginBottom: 10 },
                ]}
              >
                Market-specific consideration
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.purple}
              />
              <ThemedText
                style={[
                  styles.text2,
                  isPhone && styles.text2Phone,
                  { marginLeft: 20, marginBottom: 10 },
                ]}
              >
                Investor-ready documentation
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={Colors.purple}
              />
              <ThemedText
                style={[
                  styles.text2,
                  isPhone && styles.text2Phone,
                  { marginLeft: 20, marginBottom: 10 },
                ]}
              >
                Practical implementation guidance
              </ThemedText>
            </View>
          </View>
        </View3>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: isPhone && 'wrap',
            justifyContent: isPhone ? 'center' : 'flex-start',
            width: width > 1280 ? '90%' : '100%',
          }}
        >
          <View
            style={[
              styles.container5,
              { width: width > 1280 ? '30%' : isPhone ? '95%' : '30%' },
            ]}
          >
            <Image
              source={require('../../../assets/images/screen1440/launch-startup.png')}
              width={15}
              height={15}
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles.text6}>Launch Startups</Text>
          </View>
          <View
            style={[
              styles.container5,
              { width: width > 1280 ? '30%' : isPhone ? '95%' : '30%' },
            ]}
          >
            <Image
              source={require('../../../assets/images/screen1440/seek-investment.png')}
              width={15}
              height={15}
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles.text6}>Seek Investment</Text>
          </View>
          <View
            style={[
              styles.container5,
              { width: width > 1280 ? '30%' : isPhone ? '95%' : '30%' },
            ]}
          >
            <Image
              source={require('../../../assets/images/screen1440/plan-expansion.png')}
              width={15}
              height={15}
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles.text6}>Plan Expansion</Text>
          </View>
        </View>
      </View3>
      <View3 style={isTablet && styles.imageWrapTablet}>
        <Image
          source={require('../../../assets/images/screen1440/what-we-offer-business-plan.png')}
          style={[
            styles.image,
            isTablet && styles.imageTablet,
            isPhone && styles.imagePhone,
          ]}
          resizeMode="contain"
        />
      </View3>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: Colors.ficialPink,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: Colors.purple,
    marginBottom: 20,
  },
  container2: {
    backgroundColor: Colors.white05,
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 20,
    borderWidth: 1,
  },
  container5: {
    backgroundColor: Colors.silver,
    borderWidth: 2,
    borderColor: Colors.ficialPink,
    justifyContent: 'center',
    alignContent: 'center',
    height: 92,
    marginVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  container4: {
    width: '70%',
    backgroundColor: Colors.lightBlue,
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray,
  },

  text: {
    fontSize: 14,
    fontFamily: 'bold',
    color: Colors.purple,
  },
  text1: {
    fontFamily: 'bold',
    fontSize: 45,
    lineHeight: 48,
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
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
    color: Colors.black,
  },
  text2Phone: {
    fontSize: 14,
    lineHeight: 24,
  },
  text3: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 36,
    color: Colors.black,
  },
  text4: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 24,
    color: Colors.black,
  },
  text5: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
  },
  text5Phone: {
    lineHeight: 24,
  },
  text6: {
    fontFamily: 'bold',
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  text7: {
    fontFamily: 'light',
    fontSize: 14,
    color: Colors.black,

    marginTop: 10,
  },
  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.purple,
    marginVertical: 30,
  },
  container3: {
    backgroundColor: Colors.lightBlue,
    paddingVertical: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
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
