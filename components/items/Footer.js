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
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import WhyAMMattersView from './WhyAMMattersView';

const windowWidth = Dimensions.get('window').width;

export default function Footer(props) {
  const theme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <View style={styles.container3}>
            <Image
              source={require('../../assets/logo/access-mentor-logo.png')}
            />
            <View>
              <Text style={styles.text2}>ACCESS MENTOR</Text>
              <Text style={styles.text3}>Global Mentorship Platform</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text4}>A Digital Platform by</Text>
            <Text style={styles.text2}>SEYO INTERCONTINENTAL LLC</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={styles.text}>Head Office</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
              name="location-outline"
              size={32}
              color={Colors.white01}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.text1}>1910 Thomes Ave</Text>
              <Text style={styles.text1}>Cheyenne, WY 82001</Text>
              <Text style={styles.text1}>United State of America</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.text}>Quick Links</Text>
          <View>
            <Pressable style={{ marginBottom: 10 }}>
              <Text style={styles.text1}>About Us</Text>
            </Pressable>
            <Pressable style={{ marginBottom: 10 }}>
              <Text style={styles.text1}>What We Offer</Text>
            </Pressable>
            <Pressable style={{ marginBottom: 10 }}>
              <Text style={styles.text1}>How It Works</Text>
            </Pressable>
            <Pressable style={{ marginBottom: 10 }}>
              <Text style={styles.text1}>Meet The Team</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.border}></View>
      <View style={styles.container4}>
        <Text
          style={styles.text1}
        >{`© SEYO INTERCONTINENTAL LLC ${new Date().getFullYear()}  | All Rights Reserved`}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Pressable style={{ marginRight: 20 }}>
            <Text style={styles.text1}>Privacy Policy</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text1}>Terms of Service</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    width: windowWidth,
    height: 345,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  container2: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },

  text1: {
    fontFamily: 'light',
    fontSize: 16,
    color: Colors.white01,
    lineHeight: 22,
  },
  text: {
    fontFamily: 'bold',
    fontSize: 24,
    color: Colors.white,
    lineHeight: 26,
    marginBottom: 30,
  },
  text2: {
    fontFamily: 'bold',
    fontSize: 24,
    color: Colors.white,
    lineHeight: 26,
  },
  text3: {
    fontFamily: 'light',
    fontSize: 16,
    color: Colors.white01,
    lineHeight: 18,
  },
  text4: {
    fontFamily: 'light',
    fontSize: 16,
    color: Colors.white01,
    lineHeight: 18,
  },
  border: {
    borderTopWidth: 2,
    borderColor: Colors.white01,
    width: '90%',
    marginVertical: 30,
  },
});
