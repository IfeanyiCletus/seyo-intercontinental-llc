import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
  Pressable,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import SponsorPartner from './SponsorPartner';
import PartnershipOpportunities from './PartnershipOpportunities';

const windowWidth = Dimensions.get('window').width;

export default function InvestmentAndPartnership(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  return (
    <View2
      source={require('../../assets/images/screen1440/gradient-4.png')}
      style={styles.container}
    >
      <ThemedText style={styles.text1}>Investment & Partnership</ThemedText>
      <ThemedText style={styles.text2}>
        Join us in creating a global movement of mentorship and growth
      </ThemedText>
      <ThemedView style={styles.container1}></ThemedView>
      <SponsorPartner />
      <PartnershipOpportunities />
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 861,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    borderTopWidth: 4,
    borderColor: Colors.blue,
    width: 100,
    marginTop: 20,
    marginBottom: 30,
  },
  container2: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },

  text: {
    fontFamily: 'bold',
    fontSize: 46,
    lineHeight: 48,
  },
  text1: {
    fontSize: 44,
    fontFamily: 'bold',
  },
  text2: {
    fontSize: 18,
    fontFamily: 'light',
  },
  text3: {
    fontSize: 30,
    fontFamily: 'bold',
    lineHeight: 36,
    color: Colors.white,
    marginVertical: 30,
  },
  text4: {
    fontSize: 16,
    fontFamily: 'bold',
    color: Colors.primary,
  },
});
