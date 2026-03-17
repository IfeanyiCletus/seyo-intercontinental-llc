import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Pressable,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Footer(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  const isTabletOnly = isTablet && !isPhone;

  return (
    <View
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 345,
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 40 : 0,
        },
      ]}
    >
      <View
        style={[
          styles.container1,
          (isTabletOnly || isPhone) && styles.container1Tablet,
        ]}
      >
        <View
          style={[
            styles.brandBlock,
            (isTabletOnly || isPhone) && styles.sectionBlockTablet,
          ]}
        >
          <View style={[styles.container3, isPhone && styles.container3Phone]}>
            <Image
              source={require('../../assets/logo/access-mentor-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={isPhone && styles.logoTextWrapPhone}>
              <Text style={[styles.text2, isPhone && styles.text2Phone]}>
                ACCESS MENTOR
              </Text>
              <Text style={[styles.text3, isPhone && styles.text3Phone]}>
                Global Mentorship Platform
              </Text>
            </View>
          </View>
          <View style={{ marginTop: isPhone ? 20 : 30 }}>
            <Text style={[styles.text4, isPhone && styles.text4Phone]}>
              A Digital Platform by
            </Text>
            <Text style={[styles.text2, isPhone && styles.text2Phone]}>
              SEYO INTERCONTINENTAL LLC
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.infoRow,
            !isTabletOnly && !isPhone && styles.infoRowDesktop,
            (isTabletOnly || isPhone) && styles.infoRowTablet,
            isPhone && styles.infoRowPhone,
          ]}
        >
          <View
            style={[
              styles.contactBlock,
              isPhone && styles.contactBlockPhone,
              isPhone && { alignItems: 'flex-start' },
            ]}
          >
            <Text style={[styles.text, isPhone && styles.textPhone]}>
              Head Office
            </Text>
            <View
              style={[styles.addressRow, isPhone && styles.addressRowPhone]}
            >
              <Ionicons
                name="location-outline"
                size={isPhone ? 26 : 32}
                color={Colors.gray}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  1910 Thomes Ave
                </Text>
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  Cheyenne, WY 82001
                </Text>
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  United State of America
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              isPhone && styles.quickLinksBlockPhone,
              isPhone && styles.quickLinksPhone,
            ]}
          >
            <Text style={[styles.text, isPhone && styles.textPhone]}>
              Quick Links
            </Text>
            <View>
              <Pressable style={{ marginBottom: 10 }} onPress={props.pressHome}>
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  Home
                </Text>
              </Pressable>
              <Pressable
                style={{ marginBottom: 10 }}
                onPress={props.pressAboutUs}
              >
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  About Us
                </Text>
              </Pressable>
              <Pressable
                style={{ marginBottom: 10 }}
                onPress={props.pressWhatWeOffer}
              >
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  What We Offer
                </Text>
              </Pressable>

              <Pressable
                style={{ marginBottom: 10 }}
                onPress={props.pressMeetTheTeam}
              >
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  Meet The Team
                </Text>
              </Pressable>
              <Pressable
                style={{ marginBottom: 10 }}
                onPress={props.pressContactUs}
              >
                <Text style={[styles.text1, isPhone && styles.text1Phone]}>
                  Contact Us
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.border}></View>
      <View style={[styles.container4, isPhone && styles.container4Tablet]}>
        <Text
          style={[
            styles.text1,
            isPhone && styles.text1Phone,
            styles.copyrightText,
          ]}
        >{`© SEYO INTERCONTINENTAL LLC ${new Date().getFullYear()} | All Rights Reserved`}</Text>
        <View style={[styles.legalLinks, isPhone && styles.legalLinksPhone]}>
          <Pressable
            style={{
              marginRight: isPhone ? 12 : 20,
              marginBottom: isPhone ? 8 : 0,
            }}
          >
            <Text style={[styles.text1, isPhone && styles.text1Phone]}>
              Privacy Policy
            </Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.text1, isPhone && styles.text1Phone]}>
              Terms of Service
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
  },
  container1Tablet: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 28,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoRowDesktop: {
    flex: 1,
    marginLeft: 40,
  },
  infoRowTablet: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoRowPhone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container3Phone: {
    alignItems: 'flex-start',
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  container4Tablet: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  brandBlock: {
    maxWidth: 320,
    flexShrink: 0,
  },
  contactBlock: {
    maxWidth: 280,
  },
  contactBlockPhone: {
    width: '48%',
    maxWidth: '48%',
  },
  sectionBlockTablet: {
    width: '100%',
    alignSelf: 'center',
  },
  quickLinksBlockPhone: {
    width: '48%',
    maxWidth: '48%',
  },
  quickLinksPhone: {
    alignItems: 'flex-start',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressRowPhone: {
    alignItems: 'flex-start',
  },
  logo: {
    width: 72,
    height: 72,
    marginRight: 12,
  },
  logoTextWrapPhone: {
    flexShrink: 1,
  },
  legalLinks: {
    flexDirection: 'row',
  },
  legalLinksPhone: {
    flexWrap: 'wrap',
  },
  copyrightText: {
    flexShrink: 1,
  },

  text1: {
    fontFamily: 'light',
    fontSize: 16,
    color: Colors.gray,
    lineHeight: 22,
  },
  text1Phone: {
    fontSize: 12,
    lineHeight: 18,
  },
  text: {
    fontFamily: 'bold',
    fontSize: 24,
    color: Colors.white,
    lineHeight: 26,
    marginBottom: 30,
  },
  textPhone: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 16,
  },
  text2: {
    fontFamily: 'bold',
    fontSize: 24,
    color: Colors.white,
    lineHeight: 26,
  },
  text2Phone: {
    fontSize: 18,
    lineHeight: 22,
  },
  text3: {
    fontFamily: 'light',
    fontSize: 16,
    color: Colors.gray,
    lineHeight: 18,
  },
  text3Phone: {
    fontSize: 12,
    lineHeight: 16,
  },
  text4: {
    fontFamily: 'light',
    fontSize: 16,
    color: Colors.gray,
    lineHeight: 18,
  },
  text4Phone: {
    fontSize: 12,
    lineHeight: 16,
  },
  border: {
    borderTopWidth: 2,
    borderColor: Colors.white01,
    width: '90%',
    marginVertical: 30,
  },
});
