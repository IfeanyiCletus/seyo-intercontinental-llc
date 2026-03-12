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
import PartnershipOpportunitiesView from './PartnershipOppportunitiesView';

const windowWidth = Dimensions.get('window').width;

export default function PartnershipOpportunities(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>
        Partnership Opportunities include:
      </ThemedText>
      <ThemedView style={styles.container1}>
        <PartnershipOpportunitiesView
          icon={'trending-up-outline'}
          text={'Platform expansion'}
        />
        <PartnershipOpportunitiesView
          icon={'business-outline'}
          text={'Marketing initiatives'}
        />
        <PartnershipOpportunitiesView
          icon={'people-outline'}
          text={'Mentor recruitment'}
        />
      </ThemedView>
      <ThemedView style={styles.container1}>
        <PartnershipOpportunitiesView
          icon={'language-outline'}
          text={'Language and regional growth'}
        />
        <PartnershipOpportunitiesView
          icon={'finger-print-outline'}
          text={'Industry-specific programme'}
          text1={'development'}
        />
        <ThemedView
          style={{ width: windowWidth / 6, marginHorizontal: 20 }}
        ></ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    width: '65%',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
  },
  container1: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
  },
});
