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

const windowWidth = Dimensions.get('window').width;

export default function AboutUsHeadOffice(props) {
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
          source={require('../../../assets/images/screen1440/about-us-map.png')}
          width={652}
          height={576}
        />
      </View3>
      <View3 style={{ width: windowWidth / 4 }}>
        <View
          style={[
            styles.container1,
            {
              borderColor: theme === 'dark' ? Colors.white05 : Colors.gray,
            },
          ]}
        >
          <Text style={styles.text}>Our Location</Text>
        </View>
        <ThemedText style={styles.text1}>Head Office</ThemedText>
        <View style={styles.border}></View>
        <ThemedText style={styles.text5}>
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
        <View3 style={{ flexDirection: 'row' }}>
          <View style={styles.container3}>
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
          <View style={styles.container3}>
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
    width: windowWidth,
    height: 860,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
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
    borderTopColor: Colors.primary,
    marginBottom: 30,
  },
});
