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

export default function WhatWeOfferBusinessClinic(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-1.png')}
      style={styles.container}
    >
      <View3 style={{ width: windowWidth / 3 }}>
        <View
          style={[
            styles.container1,
            { borderColor: theme === 'dark' ? Colors.white05 : Colors.gray },
          ]}
        >
          <Ionicons name="briefcase-outline" size={22} color={Colors.primary} />
          <Text style={[styles.text, { marginLeft: 10 }]}>Service 01</Text>
        </View>
        <ThemedText style={styles.text1}>Business Clinics</ThemedText>
        <View style={styles.border}></View>
        <View3 style={{ marginBottom: 20 }}>
          <ThemedText style={styles.text2}>
            Connect with experienced business mentors who understand the
            challenges of building and running successful enterprises. Our
            mentors maintain their own schedules on the platform, and clients
            can view their availability through easy-to-use dashboards.
          </ThemedText>
        </View3>
        <View3
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <View3 style={{ marginTop: 20 }}>
            <Ionicons name="time-outline" size={24} color={Colors.primary} />
          </View3>
          <View3 style={{ width: '70%', marginLeft: 20 }}>
            <ThemedText
              style={{
                fontFamily: 'bold',

                fontSize: 20,
              }}
            >
              Flexible Session Lengths
            </ThemedText>
            <ThemedText style={styles.text2}>
              15 to 60 minutes, allowing for quick consultations or deep
              discussions about complex business challenges.
            </ThemedText>
          </View3>
        </View3>
        <View3
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <View3 style={{ marginTop: 20 }}>
            <Ionicons name="cash-outline" size={24} color={Colors.primary} />
          </View3>
          <View3 style={{ width: '70%', marginLeft: 20 }}>
            <ThemedText
              style={{
                fontFamily: 'bold',

                fontSize: 20,
              }}
            >
              Transparent Revenue Model
            </ThemedText>
            <ThemedText style={styles.text2}>
              70% to mentors, 30% covers administrative costs including taxes,
              personnel, and platform maintenance.
            </ThemedText>
          </View3>
        </View3>
        <View3
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <View3 style={{ marginTop: 20 }}>
            <Ionicons
              name="trending-up-outline"
              size={24}
              color={Colors.primary}
            />
          </View3>
          <View3 style={{ width: '70%', marginLeft: 20 }}>
            <ThemedText
              style={{
                fontFamily: 'bold',

                fontSize: 20,
              }}
            >
              Mentor Dashboard
            </ThemedText>
            <ThemedText style={styles.text2}>
              Track performance, earnings, and client feedback with complete
              transparency.
            </ThemedText>
          </View3>
        </View3>
      </View3>
      <View3>
        <Image
          source={require('../../../assets/images/screen1440/what-we-offer-business-clinic.png')}
          width={574}
          height={400}
          style={{ borderRadius: 20 }}
        />
        <View style={styles.container4}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="ribbon-outline" size={32} color={Colors.primary} />
            <Text style={styles.text5}>Mentor Tier System</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.container2}>
              <Image
                source={require('../../../assets/images/screen1440/silver.png')}
                width={15}
                height={15}
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.text6}>Silver</Text>
            </View>
            <View
              style={[
                styles.container2,
                {
                  backgroundColor: Colors.gold,
                  borderColor: Colors.goldBorder,
                },
              ]}
            >
              <Image
                source={require('../../../assets/images/screen1440/gold.png')}
                width={15}
                height={15}
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.text6}>Gold</Text>
            </View>
            <View
              style={[
                styles.container2,
                {
                  backgroundColor: Colors.lightBlue,
                  borderColor: Colors.primary,
                },
              ]}
            >
              <Image
                source={require('../../../assets/images/screen1440/diamond.png')}
                width={15}
                height={15}
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.text6}>Diamond</Text>
            </View>
          </View>
          <View>
            <Text style={styles.text7}>
              Mentors are categorized based on expertise, experience, and track
              record to help you choose the perfect match.
            </Text>
          </View>
        </View>
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
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
  },
  container2: {
    width: '30%',
    backgroundColor: Colors.silver,
    borderWidth: 3,
    borderColor: Colors.gray,
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
  text5: {
    fontFamily: 'bold',

    fontSize: 20,
    color: Colors.black,
    marginLeft: 20,
  },
  text6: {
    fontFamily: 'bold',
    fontSize: 18,
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
