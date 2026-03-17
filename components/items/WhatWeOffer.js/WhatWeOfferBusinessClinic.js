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
export default function WhatWeOfferBusinessClinic(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-1.png')}
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 973,
          justifyContent: isTablet
            ? 'center'
            : width > 1280
              ? 'center'
              : 'space-between',
          flexDirection: isTablet ? 'column' : 'row',
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 48 : 0,
        },
      ]}
    >
      <View3
        style={[
          width <= 1280 &&
            !isTablet && {
              marginLeft: 30,
            },
          { width: isTablet ? '100%' : width > 1280 ? width / 3 : width / 2 },
        ]}
      >
        <View3 style={width <= 1280 && !isTablet && { width: '90%' }}>
          <View
            style={[
              styles.container1,
              isTablet && styles.container1Tablet,
              { borderColor: theme === 'dark' ? Colors.white05 : Colors.gray },
            ]}
          >
            <Ionicons
              name="briefcase-outline"
              size={22}
              color={Colors.primary}
            />
            <Text style={[styles.text, { marginLeft: 10 }]}>Service 01</Text>
          </View>
          <ThemedText
            style={[
              styles.text1,
              isTablet && styles.text1Tablet,
              isPhone && styles.text1Phone,
            ]}
          >
            Business Clinics
          </ThemedText>
          <View style={styles.border}></View>
          <View3 style={{ marginBottom: 20 }}>
            <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
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
            <View3 style={{ width: isPhone ? '78%' : '70%', marginLeft: 20 }}>
              <ThemedText
                style={[
                  styles.featureTitle,
                  isPhone && styles.featureTitlePhone,
                ]}
              >
                Flexible Session Lengths
              </ThemedText>
              <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
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
            <View3 style={{ width: isPhone ? '78%' : '70%', marginLeft: 20 }}>
              <ThemedText
                style={[
                  styles.featureTitle,
                  isPhone && styles.featureTitlePhone,
                ]}
              >
                Transparent Revenue Model
              </ThemedText>
              <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
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
            <View3 style={{ width: isPhone ? '78%' : '70%', marginLeft: 20 }}>
              <ThemedText
                style={[
                  styles.featureTitle,
                  isPhone && styles.featureTitlePhone,
                ]}
              >
                Mentor Dashboard
              </ThemedText>
              <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
                Track performance, earnings, and client feedback with complete
                transparency.
              </ThemedText>
            </View3>
          </View3>
        </View3>
      </View3>
      <View3 style={isTablet && styles.mediaWrapTablet}>
        <Image
          source={require('../../../assets/images/screen1440/what-we-offer-business-clinic.png')}
          style={[
            styles.image,
            isTablet && styles.imageTablet,
            isPhone && styles.imagePhone,
          ]}
          resizeMode="contain"
        />
        <View style={[styles.container4, isTablet && styles.container4Tablet]}>
          <View style={styles.tierHeader}>
            <Ionicons name="ribbon-outline" size={32} color={Colors.primary} />
            <Text style={[styles.text5, isPhone && styles.text5Phone]}>
              Mentor Tier System
            </Text>
          </View>

          <View style={styles.tiersRow}>
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
            <Text style={[styles.text7, isPhone && styles.text7Phone]}>
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
    alignItems: 'center',
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
  container1Tablet: {
    width: '40%',
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
  },
  text2Phone: {
    fontSize: 14,
    lineHeight: 24,
  },
  featureTitle: {
    fontFamily: 'bold',
    fontSize: 20,
  },
  featureTitlePhone: {
    fontSize: 18,
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
  text5Phone: {
    fontSize: 18,
    marginLeft: 12,
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
  text7Phone: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
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
  image: {
    width: 574,
    height: 400,
    borderRadius: 20,
  },
  imageTablet: {
    width: 460,
    height: 320,
  },
  imagePhone: {
    width: 300,
    height: 209,
  },
  mediaWrapTablet: {
    alignItems: 'center',
    marginTop: 24,
  },
  container4Tablet: {
    width: '100%',
  },
  tierHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tiersRow: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
