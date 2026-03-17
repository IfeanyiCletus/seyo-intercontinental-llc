import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import SponsorPartner from './SponsorPartner';
import PartnershipOpportunities from './PartnershipOpportunities';

export default function InvestmentAndPartnership(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  return (
    <View2
      source={require('../../assets/images/screen1440/gradient-4.png')}
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 861,
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 56 : 0,
        },
      ]}
    >
      <ThemedText style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}>
        Investment & Partnership
      </ThemedText>
      <ThemedText style={[styles.text2, isPhone && styles.text2Phone]}>
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
    textAlign: 'center',
  },
  text2: {
    fontSize: 18,
    fontFamily: 'light',
    textAlign: 'center',
  },
  text1Tablet: {
    fontSize: 34,
  },
  text1Phone: {
    fontSize: 28,
  },
  text2Phone: {
    fontSize: 16,
    lineHeight: 24,
  },
});
