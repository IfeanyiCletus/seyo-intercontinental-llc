import React from 'react';
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import SponsporPartnerView from './SponsporPartnerView';

export default function SponsorPartner(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  let View3 = ThemedView;
  return (
    <View3
      style={[
        styles.container,
        { width: width > 1280 ? '65%' : isTablet ? '100%' : '85%' },
        theme === 'light' && { backgroundColor: Colors.lightBlue },
      ]}
    >
      <ThemedText style={styles.text}>
        We welcome sponsors and partners who believe in:
      </ThemedText>
      <View3
        style={isPhone || isTablet ? styles.container1 : styles.container2}
      >
        <SponsporPartnerView
          icon={'globe-outline'}
          text={'Expanding global access to mentorship'}
        />
        <SponsporPartnerView
          icon={'trending-up-outline'}
          text={'Strengthening enterprises'}
        />
        <SponsporPartnerView
          icon={'people-outline'}
          text={'Supporting individual growth'}
        />
      </View3>
    </View3>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
    textAlign: 'center',
  },
});
