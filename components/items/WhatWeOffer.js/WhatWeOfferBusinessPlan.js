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
const divider = windowWidth > 1280 ? 3 : 2.5;
export default function WhatWeOfferBusinessPlan(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-2.png')}
      style={styles.container}
    >
      <View3 style={{ width: windowWidth / divider }}>
        <View style={styles.container1}>
          <Ionicons
            name="document-text-outline"
            size={22}
            color={Colors.purple}
          />
          <Text style={[styles.text, { marginLeft: 10 }]}>Service 03</Text>
        </View>
        <ThemedText style={styles.text1}>Business Plan</ThemedText>
        <ThemedText style={styles.text1}>Development</ThemedText>
        <View style={styles.border}></View>
        <View3 style={{ marginBottom: 20 }}>
          <ThemedText style={styles.text5}>
            Many entrepreneurs have brilliant ideas but struggle to transform
            them into structured, actionable plans that attract investors or
            guide implementation.
          </ThemedText>
        </View3>
        <View3
          style={[
            styles.container2,
            {
              borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
            },
          ]}
        >
          <View style={{ marginLeft: windowWidth > 1280 ? 20 : 10 }}>
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
              >
                Practical implementation guidance
              </ThemedText>
            </View>
          </View>
        </View3>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth > 1280 ? '90%' : '86%',
          }}
        >
          <View style={styles.container5}>
            <Image
              source={require('../../../assets/images/screen1440/launch-startup.png')}
              width={15}
              height={15}
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles.text6}>Launch Startups</Text>
          </View>
          <View style={styles.container5}>
            <Image
              source={require('../../../assets/images/screen1440/seek-investment.png')}
              width={15}
              height={15}
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles.text6}>Seek Investment</Text>
          </View>
          <View style={styles.container5}>
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
      <View3>
        <Image
          source={require('../../../assets/images/screen1440/what-we-offer-business-plan.png')}
          width={652}
          height={676}
          style={{ borderRadius: 20 }}
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
    width: windowWidth > 1280 ? '90%' : '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 20,
    borderWidth: 1,
  },
  container5: {
    width: windowWidth > 1280 ? '30%' : '35%',
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
  text2: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
    color: Colors.black,
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
});
