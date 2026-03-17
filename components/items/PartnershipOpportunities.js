import React from 'react';
import {
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import PartnershipOpportunitiesView from './PartnershipOppportunitiesView';

export default function PartnershipOpportunities(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  return (
    <ThemedView
      style={[
        styles.container,
        { width: width > 1280 ? '65%' : isTablet ? '100%' : '85%' },
      ]}
    >
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
        <PartnershipOpportunitiesView
          icon={'language-outline'}
          text={'Language and regional growth'}
        />
        <PartnershipOpportunitiesView
          icon={'finger-print-outline'}
          text={'Industry-specific programme'}
          text1={'development'}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
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
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 32,
    textAlign: 'center',
  },
});
