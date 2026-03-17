import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedText from '../ThemedText';

export default function WhatWeOfferRevenueModel(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <View
      style={{
        width,
        alignItems: 'center',
        paddingHorizontal: isPhone ? 16 : 24,
      }}
    >
      <View
        style={[{ marginTop: 50 }, (isPhone || isTablet) && { marginTop: 100 }]}
      >
        <ThemedText
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
          ]}
        >
          Transparent Revenue Model
        </ThemedText>
      </View>
      <View style={styles.border}></View>
      <View style={[styles.container1, { width: isTablet ? '100%' : '50%' }]}>
        <View style={styles.topCardsRow}>
          <View
            style={[styles.container2, isTablet && styles.container2Tablet]}
          >
            <View style={{ width: '100%', padding: 20 }}>
              <View style={styles.container3}>
                <ThemedText
                  style={[
                    styles.percentText,
                    isPhone && styles.percentTextPhone,
                  ]}
                >
                  70%
                </ThemedText>
                <Ionicons
                  name="medal-outline"
                  color={Colors.primary}
                  size={32}
                />
              </View>
              <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
                To Mentors/Counsellors
              </ThemedText>
              <ThemedText style={[styles.text3, isPhone && styles.text3Phone]}>
                Fair compensation for expertise and time invested in client
                success.
              </ThemedText>
            </View>
          </View>
          <View
            style={[styles.container2, isTablet && styles.container2Tablet]}
          >
            <View style={{ width: '100%', padding: 20 }}>
              <View style={styles.container3}>
                <ThemedText
                  style={[
                    styles.percentText,
                    isPhone && styles.percentTextPhone,
                  ]}
                >
                  30%
                </ThemedText>
                <Ionicons
                  name="shield-outline"
                  color={Colors.primary}
                  size={32}
                />
              </View>
              <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
                Platform Operations
              </ThemedText>
              <ThemedText style={[styles.text3, isPhone && styles.text3Phone]}>
                Administrative costs, taxes, personnel salaries, and
                maintenance.
              </ThemedText>
            </View>
          </View>
        </View>
        <View style={styles.container4}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="shield-outline" color={Colors.primary} size={32} />
            <ThemedText style={[styles.text4, isPhone && styles.text4Phone]}>
              Secure Payment Processing
            </ThemedText>
          </View>
          <View style={{ width: '100%' }}>
            <ThemedText style={[styles.text3, isPhone && styles.text3Phone]}>
              Payment is processed before sessions begin, providing security for
              both parties. Each mentor can track their performance, earnings,
              and client feedback through a personal dashboard with complete
              transparency.
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={[styles.container5, { width }]}>
        <Text style={[styles.ctaTitle, isPhone && styles.ctaTitlePhone]}>
          Ready to Get Started?
        </Text>
        <View style={{ width: isTablet ? '100%' : '40%', marginBottom: 40 }}>
          <Text style={[styles.text5, isPhone && styles.text5Phone]}>
            Whether you need business guidance, counselling support, or want to
            become a mentor, we're here to help.
          </Text>
        </View>

        <Pressable style={styles.container6}>
          <Text style={styles.buttonText}>Book your first session</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 50,
  },
  container2: {
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-between',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  container2Tablet: {
    width: '100%',
    marginHorizontal: 0,
    marginBottom: 16,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  container4: {
    width: '95%',
    justifyContent: 'space-between',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    padding: 20,
  },
  container5: {
    backgroundColor: Colors.lightBlue,
    height: 412,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
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
    textAlign: 'center',
  },
  text2: {
    fontSize: 16,
    fontFamily: 'medium',
    lineHeight: 24,
  },
  text2Phone: {
    fontSize: 14,
    lineHeight: 22,
  },
  text3: {
    fontFamily: 'light',
    fontSize: 14,
    marginVertical: 20,
  },
  text3Phone: {
    lineHeight: 20,
  },
  text4: {
    fontSize: 16,
    fontFamily: 'medium',
    marginLeft: 20,
  },
  text4Phone: {
    fontSize: 14,
    marginLeft: 12,
  },
  text5: {
    fontFamily: 'light',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },
  text5Phone: {
    fontSize: 16,
    lineHeight: 24,
  },
  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
    marginBottom: 30,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'medium',
    fontSize: 16,
    color: Colors.white05,
    textAlign: 'center',
  },
  topCardsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    flexWrap: 'wrap',
    width: '100%',
  },
  percentText: {
    fontSize: 30,
    fontFamily: 'bold',
    color: Colors.primary,
  },
  percentTextPhone: {
    fontSize: 24,
  },
  ctaTitle: {
    fontSize: 46,
    fontFamily: 'bold',
    color: Colors.black,
    textAlign: 'center',
  },
  ctaTitlePhone: {
    fontSize: 30,
    lineHeight: 34,
  },
});
