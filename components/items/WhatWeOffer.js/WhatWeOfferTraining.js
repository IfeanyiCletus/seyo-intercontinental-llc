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
const divider = windowWidth > 1280 ? 3.5 : 3;

export default function WhatWeOfferTraining(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <ThemedView style={{ width: windowWidth, alignItems: 'center' }}>
      <View style={styles.container1}>
        <Ionicons name="document-text-outline" size={22} color={Colors.green} />
        <Text style={[styles.text, { marginLeft: 10 }]}>Service 04</Text>
      </View>
      <ThemedText style={styles.text1}>Training Programmes</ThemedText>
      <View style={styles.border}></View>
      <ThemedView style={{ width: '40%', marginBottom: 30 }}>
        <ThemedText style={styles.text2}>
          Two distinct types of business training designed to build capacity and
          share knowledge across our global community
        </ThemedText>
      </ThemedView>
      <Image
        source={require('../../../assets/images/screen1440/what-we-offer-training.png')}
        style={styles.image}
      />
      <ThemedView style={{ flexDirection: 'row' }}>
        <ThemedView
          style={[
            styles.container3,
            {
              borderWidth: theme === 'dark' && 1,
              borderColor: theme === 'dark' && Colors.white01,
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="globe-outline" color={Colors.white} size={32} />
          </View>
          <ThemedText style={[styles.text3, { marginVertical: 20 }]}>
            Specialized Business Training
          </ThemedText>
          <ThemedView style={{ flexDirection: 'row', marginBottom: 20 }}>
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
          <ThemedText style={styles.text5}>
            Global sessions held twice yearly, welcoming participants from
            around the world. Focus on current trends, emerging opportunities,
            and proven strategies for enterprise growth.
          </ThemedText>
          <View style={styles.container2}>
            <Text style={styles.text6}>
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
            {
              borderWidth: theme === 'dark' && 1,
              borderColor: theme === 'dark' && Colors.white01,
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" color={Colors.white05} size={32} />
          </View>
          <ThemedText style={[styles.text3, { marginVertical: 20 }]}>
            Customized Business Training
          </ThemedText>
          <ThemedView style={{ marginBottom: 20, width: '60%' }}>
            <ThemedView style={styles.container4}>
              <Ionicons name="people-outline" size={24} color={Colors.green} />
              <Text style={styles.text4}>Minimum of 20 participants</Text>
            </ThemedView>
          </ThemedView>
          <ThemedText style={styles.text5}>
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
              <Text style={[styles.text6, { marginLeft: 10 }]}>
                Interactive group work sessions
              </Text>
            </View>
            <View style={styles.iconContainer3}>
              <Ionicons
                name="checkmark-circle-outline"
                color={Colors.green}
                size={22}
              />
              <Text style={[styles.text6, { marginLeft: 10 }]}>
                Team leader presentations
              </Text>
            </View>
            <View style={styles.iconContainer3}>
              <Ionicons
                name="checkmark-circle-outline"
                color={Colors.green}
                size={22}
              />
              <Text style={[styles.text6, { marginLeft: 10 }]}>
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
  container: {
    width: windowWidth,
    height: 973,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: windowWidth > 1280 ? '10%' : '12%',
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
    width: windowWidth / divider,
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
  text2: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 20,
    textAlign: 'center',
  },
  text3: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
  },
  text4: {
    fontSize: 14,
    fontFamily: 'medium',
    color: Colors.green,
    marginLeft: 10,
  },
  text5: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 26,
    marginLeft: 10,
  },
  text6: {
    fontSize: 14,
    fontFamily: 'light',
    color: Colors.black,
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
});
