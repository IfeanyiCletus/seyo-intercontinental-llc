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

export default function WhatWeOfferGuidance(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-2.png')}
      style={styles.container}
    >
      <View3>
        <Image
          source={require('../../../assets/images/screen1440/what-we-offer-guidance.png')}
          width={652}
          height={576}
        />
      </View3>
      <View3 style={{ width: windowWidth / 3 }}>
        <View style={styles.container1}>
          <Ionicons name="briefcase-outline" size={22} color={Colors.red} />
          <Text style={[styles.text, { marginLeft: 20 }]}>Service 02</Text>
        </View>
        <ThemedText style={styles.text1}>Guidance & Counselling</ThemedText>
        <ThemedText style={styles.text1}>Service</ThemedText>
        <View style={styles.border}></View>
        <ThemedText style={styles.text5}>
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
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
                style={[styles.text2, { marginLeft: 20, marginBottom: 10 }]}
              >
                Educational guidance for students
              </ThemedText>
            </View>
          </View>
        </View3>

        <View style={styles.container3}>
          <Text style={styles.text4}>
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
    width: windowWidth,
    height: 860,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: '30%',
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
  text2: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 24,
    color: Colors.black,
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
  text5: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 30,
  },
  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.pink,
    marginBottom: 30,
    marginTop: 20,
  },
});
