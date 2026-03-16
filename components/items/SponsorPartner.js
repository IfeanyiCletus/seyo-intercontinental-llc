import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
} from 'react-native';
import Colors from '../constants/Colors';
import OfficeView from './OfficeView';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import SponsporPartnerView from './SponsporPartnerView';

const windowWidth = Dimensions.get('window').width;

export default function SponsorPartner(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <ThemedView
      style={[
        styles.container,
        theme === 'light' && { backgroundColor: Colors.lightBlue },
      ]}
    >
      <ThemedText style={styles.text}>
        We welcome sponsors and partners who believe in:
      </ThemedText>
      <View3 style={styles.container1}>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth > 1280 ? '65%' : '85%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
  },
});
