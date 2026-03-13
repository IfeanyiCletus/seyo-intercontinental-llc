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

export default function WhatWeOfferRevenueModel(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <ThemedView style={{ width: windowWidth, alignItems: 'center' }}>
      <ThemedView style={{ marginTop: 50 }}>
        <ThemedText style={styles.text1}>Transparent Revenue Model</ThemedText>
      </ThemedView>
      <View style={styles.border}></View>
      <ThemedView style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}
        >
          <ThemedView style={styles.container2}>
            <ThemedView style={{ width: '100%', padding: 20 }}>
              <ThemedView style={styles.container3}>
                <ThemedText
                  style={{
                    fontSize: 30,
                    fontFamily: 'bold',
                    color: Colors.primary,
                  }}
                >
                  70%
                </ThemedText>
                <Ionicons
                  name="medal-outline"
                  color={Colors.primary}
                  size={32}
                />
              </ThemedView>
              <ThemedText style={styles.text2}>
                To Mentors/Counsellors
              </ThemedText>
              <ThemedText style={styles.text3}>
                Fair compensation for expertise and time invested in client
                success.
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.container2}>
            <ThemedView style={{ width: '100%', padding: 20 }}>
              <ThemedView style={styles.container3}>
                <ThemedText
                  style={{
                    fontSize: 30,
                    fontFamily: 'bold',
                    color: Colors.primary,
                  }}
                >
                  30%
                </ThemedText>
                <Ionicons
                  name="shield-outline"
                  color={Colors.primary}
                  size={32}
                />
              </ThemedView>
              <ThemedText style={styles.text2}>Platform Operations</ThemedText>
              <ThemedText style={styles.text3}>
                Administrative costs, taxes, personnel salaries, and
                maintenance.
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </View>
        <ThemedView style={styles.container4}>
          <ThemedView style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="shield-outline" color={Colors.primary} size={32} />
            <ThemedText style={styles.text4}>
              Secure Payment Processing
            </ThemedText>
          </ThemedView>
          <ThemedView style={{ width: '100%' }}>
            <ThemedText style={styles.text3}>
              Payment is processed before sessions begin, providing security for
              both parties. Each mentor can track their performance, earnings,
              and client feedback through a personal dashboard with complete
              transparency.
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.container5}>
        <Text style={{ fontSize: 46, fontFamily: 'bold', color: Colors.black }}>
          Ready to Get Started?
        </Text>
        <View style={{ width: '40%', marginBottom: 40 }}>
          <Text style={styles.text5}>
            Whether you need business guidance, counselling support, or want to
            become a mentor, we're here to help.
          </Text>
        </View>

        <Pressable style={styles.container6}>
          <Text style={styles.buttonText}>Book your first session</Text>
        </Pressable>
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
    backgroundColor: Colors.lightBlue,
    width: '50%',
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
    width: windowWidth,
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
  text2: {
    fontSize: 16,
    fontFamily: 'medium',
    lineHeight: 24,
  },
  text3: {
    fontFamily: 'light',
    fontSize: 14,
    marginVertical: 20,
  },
  text4: {
    fontSize: 16,
    fontFamily: 'medium',
    marginLeft: 20,
  },
  text5: {
    fontFamily: 'light',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
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
});
