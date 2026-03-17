import React from 'react';
import { View, StyleSheet, Text, useColorScheme, Image, useWindowDimensions } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';

export default function WhatWeOfferTraining(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ThemedView
      style={{
        width,
        alignItems: 'center',
        paddingHorizontal: isPhone ? 16 : 24,
      }}
    >
      <View
        style={[
          styles.container1,
          { width: width > 1280 ? '10%' : isTablet ? (isPhone ? '36%' : '20%') : '12%' },
        ]}
      >
        <Ionicons name="document-text-outline" size={22} color={Colors.green} />
        <Text style={[styles.text, { marginLeft: 10 }]}>Service 04</Text>
      </View>
      <ThemedText style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}>
        Training Programmes
      </ThemedText>
      <View style={styles.border}></View>
      <ThemedView style={{ width: isTablet ? '100%' : '40%', marginBottom: 30 }}>
        <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
          Two distinct types of business training designed to build capacity and
          share knowledge across our global community
        </ThemedText>
      </ThemedView>
      <Image
        source={require('../../../assets/images/screen1440/what-we-offer-training.png')}
        style={[styles.image, isTablet && styles.imageTablet, isPhone && styles.imagePhone]}
        resizeMode="contain"
      />
      <ThemedView style={styles.cardsRow}>
        <ThemedView
          style={[
            styles.container3,
            { width: width > 1280 ? width / 3.5 : isTablet ? '100%' : width / 3 },
            {
              borderWidth: theme === 'dark' && 1,
              borderColor: theme === 'dark' && Colors.white01,
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="globe-outline" color={Colors.white} size={32} />
          </View>
          <ThemedText style={[styles.text3, isPhone && styles.text3Phone, { marginVertical: 20 }]}>
            Specialized Business Training
          </ThemedText>
          <ThemedView style={styles.trainingDates}>
            <ThemedView style={styles.iconContainer1}>
              <Ionicons
                name="calendar-outline"
                size={24}
                color={Colors.green}
              />
              <Text style={styles.text4}>June</Text>
            </ThemedView>
            <ThemedView style={styles.iconContainer2}>
              <Ionicons
                name="calendar-outline"
                size={24}
                color={Colors.green}
              />
              <Text style={styles.text4}>November</Text>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.text5, isPhone && styles.text5Phone]}>
            Global sessions held twice yearly, welcoming participants from
            around the world. Focus on current trends, emerging opportunities,
            and proven strategies for enterprise growth.
          </ThemedText>
          <View style={styles.container2}>
            <Text style={[styles.text6, isPhone && styles.text6Phone]}>
              <Text style={[styles.text6, { fontFamily: 'bold' }]}>
                Strategic Timing:
              </Text>{' '}
              Aligned with mid-year reviews and year-end planning cycles to
              maximize learning implementation.
            </Text>
          </View>
        </ThemedView>
        <ThemedView
          style={[
            styles.container3,
            { width: width > 1280 ? width / 3.5 : isTablet ? '100%' : width / 3 },
            {
              borderWidth: theme === 'dark' && 1,
              borderColor: theme === 'dark' && Colors.white01,
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" color={Colors.white05} size={32} />
          </View>
          <ThemedText style={[styles.text3, isPhone && styles.text3Phone, { marginVertical: 20 }]}>
            Customized Business Training
          </ThemedText>
          <ThemedView style={{ marginBottom: 20, width: isPhone ? '100%' : '60%' }}>
            <ThemedView style={styles.container4}>
              <Ionicons name="people-outline" size={24} color={Colors.green} />
              <Text style={[styles.text4, isPhone && styles.text4Phone]}>
                Minimum of 20 participants
              </Text>
            </ThemedView>
          </ThemedView>
          <ThemedText style={[styles.text5, isPhone && styles.text5Phone]}>
            Tailored for organizations needing targeted skill development.
            Programs designed around specific team needs with collaborative
            learning through Google Meet.
          </ThemedText>
          <View style={styles.container2}>
            <View style={styles.iconContainer3}>
              <Ionicons
                name="checkmark-circle-outline"
                color={Colors.green}
                size={22}
              />
              <Text style={[styles.text6, isPhone && styles.text6Phone, { marginLeft: 10 }]}>
                Interactive group work sessions
              </Text>
            </View>
            <View style={styles.iconContainer3}>
              <Ionicons
                name="checkmark-circle-outline"
                color={Colors.green}
                size={22}
              />
              <Text style={[styles.text6, isPhone && styles.text6Phone, { marginLeft: 10 }]}>
                Team leader presentations
              </Text>
            </View>
            <View style={styles.iconContainer3}>
              <Ionicons
                name="checkmark-circle-outline"
                color={Colors.green}
                size={22}
              />
              <Text style={[styles.text6, isPhone && styles.text6Phone, { marginLeft: 10 }]}>
                Challenge-specific topics
              </Text>
            </View>
          </View>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: Colors.lightGreen,
    marginBottom: 30,
    borderColor: Colors.green,
    marginTop: 70,
  },
  container2: {
    backgroundColor: Colors.lightGreen,
    padding: 20,
    marginVertical: 20,
    borderRadius: 20,
  },
  container3: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 70,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    marginHorizontal: 20,
  },
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'bold',
    color: Colors.green,
  },
  text1: {
    fontFamily: 'bold',
    fontSize: 45,
    lineHeight: 45,
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
    lineHeight: 20,
    textAlign: 'center',
  },
  text2Phone: {
    fontSize: 14,
    lineHeight: 22,
  },
  text3: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
  },
  text3Phone: {
    fontSize: 18,
    lineHeight: 28,
  },
  text4: {
    fontSize: 14,
    fontFamily: 'medium',
    color: Colors.green,
    marginLeft: 10,
  },
  text4Phone: {
    fontSize: 12,
    marginLeft: 8,
  },
  text5: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 26,
    marginLeft: 10,
  },
  text5Phone: {
    lineHeight: 22,
    marginLeft: 0,
  },
  text6: {
    fontSize: 14,
    fontFamily: 'light',
    color: Colors.black,
  },
  text6Phone: {
    fontSize: 13,
    lineHeight: 20,
  },
  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.green,
    marginBottom: 30,
    marginTop: 20,
  },
  image: {
    borderRadius: 20,
    marginVertical: 30,
    width: 900,
    height: 320,
  },
  imageTablet: {
    width: 500,
    height: 178,
  },
  imagePhone: {
    width: 300,
    height: 107,
  },
  iconContainer: {
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  iconContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  iconContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  trainingDates: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
});
