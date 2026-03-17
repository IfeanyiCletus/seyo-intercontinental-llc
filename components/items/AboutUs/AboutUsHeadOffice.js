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

export default function AboutUsHeadOffice(props) {
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
          justifyContent: isTablet
            ? 'center'
            : width > 1280
              ? 'center'
              : 'flex-start',
          flexDirection: isTablet ? 'column' : 'row',
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 48 : 0,
        },
      ]}
    >
      <View3 style={isTablet && styles.mapWrapTablet}>
        <Image
          source={require('../../../assets/images/screen1440/about-us-map.png')}
          style={[
            styles.mapImage,
            width <= 1280 && !isTablet && { marginLeft: 40 },
            isTablet && styles.mapImageTablet,
            isPhone && styles.mapImagePhone,
          ]}
          resizeMode="contain"
        />
      </View3>
      <View3
        style={{
          width: isTablet ? '100%' : width > 1280 ? width / 4 : width / 2.5,
        }}
      >
        <View
          style={[
            styles.container1,
            {
              width:
                width > 1280
                  ? '30%'
                  : isTablet
                    ? isPhone
                      ? '52%'
                      : '35%'
                    : '40%',
              borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
            },
          ]}
        >
          <Text style={styles.text}>Our Location</Text>
        </View>
        <ThemedText
          style={[
            styles.text1,
            isTablet && styles.text1Tablet,
            isPhone && styles.text1Phone,
          ]}
        >
          Head Office
        </ThemedText>
        <View style={styles.border}></View>
        <ThemedText style={[styles.text5, isPhone && styles.text5Phone]}>
          Our head office operates from Cheyenne, Wyoming, where our dedicated
          team works to maintain global standards while serving clients across
          different continents and cultures.
        </ThemedText>
        <View3
          style={[
            styles.container2,
            {
              borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <Ionicons
              name="location-outline"
              size={32}
              color={Colors.lightBlue}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <ThemedText style={styles.text3}>Physical Address</ThemedText>
            <ThemedText style={styles.text2}>1910 Thomes Ave</ThemedText>
            <ThemedText style={styles.text2}>Cheyenne, WY 82001</ThemedText>
            <ThemedText style={styles.text2}>
              United States of America
            </ThemedText>
          </View>
        </View3>
        <View3 style={[styles.contactRow, isPhone && styles.contactRowPhone]}>
          <View style={[styles.container3, isPhone && { width: '90%' }]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Ionicons name="mail-outline" color={Colors.primary} size={24} />
              <Text style={[styles.text3, { marginLeft: 5 }]}>Email</Text>
            </View>
            <Text style={styles.text4}>info@accessmentor.com</Text>
          </View>
          <View style={[styles.container3, isPhone && { width: '90%' }]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Ionicons name="call-outline" color={Colors.primary} size={24} />
              <Text style={[styles.text3, { marginLeft: 5 }]}>Phone</Text>
            </View>
            <Text style={styles.text4}>Available 24/7</Text>
          </View>
        </View3>
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
    alignItems: 'center',
    borderWidth: 1,
  },
  container2: {
    backgroundColor: Colors.lightBlue,
    width: '100%',
    flexDirection: 'row',

    paddingVertical: 20,
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 20,
    borderWidth: 1,
  },
  container3: {
    backgroundColor: Colors.white05,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  contactRow: {
    flexDirection: 'row',
  },
  contactRowPhone: {
    flexDirection: 'column',
  },
  mapWrapTablet: {
    alignItems: 'center',
    marginBottom: 24,
  },
  mapImage: {
    width: 652,
    height: 576,
  },
  mapImageTablet: {
    width: 500,
    height: 442,
    marginLeft: 0,
  },
  mapImagePhone: {
    width: 300,
    height: 265,
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
  text5Phone: {
    lineHeight: 26,
  },
  border: {
    width: 100,
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
    marginBottom: 30,
  },
});
