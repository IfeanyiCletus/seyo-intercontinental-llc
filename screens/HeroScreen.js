import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Image,
  useColorScheme,
  ImageBackground,
  Text,
  Pressable,
} from 'react-native';
import ThemedView from '../components/items/ThemedView';
import ThemedText from '../components/items/ThemedText';
import Header from '../components/items/Header';
import { useRef, useState } from 'react';
import Colors from '../components/constants/Colors';
import TopImage from '../components/items/TopImage';
import { Ionicons } from '@expo/vector-icons';
import WhoWeAre from '../components/items/WhoWeAre';
import VisionAndMission from '../components/items/VisionAndMission';
import OurExpertise from '../components/items/OurExpertise';
import PlatformWorks from '../components/items/PlatformWorks';
import WhyAMMatters from '../components/items/WhyAMMatters';
import OurSolution from '../components/items/OurSolution';
import SponsorPartner from '../components/items/SponsorPartner';
import PartnershipOpportunitiesView from '../components/items/PartnershipOppportunitiesView';
import PartnershipOpportunities from '../components/items/PartnershipOpportunities';
import WhetherYouAreView from '../components/items/WhetherYouAreView';
import JoinGlobalMovement from '../components/items/JoinGlobalMovement';
import InvestmentAndPartnership from '../components/items/InvestmentAndPartnership';
import Footer from '../components/items/Footer';
import AboutUsHero from '../components/items/AboutUs/AboutUsHero';
import AboutUsOurCompany from '../components/items/AboutUs/AboutUsOurCompany';
import AboutUsHeadOffice from '../components/items/AboutUs/AboutUsHeadOffice';
import WhatDrivesUsView from '../components/items/WhatDrivesUsView';
import AboutUsWhatDrivesUs from '../components/items/AboutUs/AboutUsWhatDrivesUs';
import WhatWeOfferHero from '../components/items/WhatWeOffer.js/WhatWeOfferHero';
import WhatWeOfferBusinessClinic from '../components/items/WhatWeOffer.js/WhatWeOfferBusinessClinic';
import WhatWeOfferGuidance from '../components/items/WhatWeOffer.js/WhatWeOfferGuidance';
import WhatWeOfferBusinessPlan from '../components/items/WhatWeOffer.js/WhatWeOfferBusinessPlan';
import WhatWeOfferTraining from '../components/items/WhatWeOffer.js/WhatWeOfferTraining';
import WhatWeOfferCustomerSupport from '../components/items/WhatWeOffer.js/WhatWeOfferCustomerSupport';
import WhatWeOfferRevenueModel from '../components/items/WhatWeOffer.js/WhatWeOfferTransparentRevenueModel';

const windowWidth = Dimensions.get('window').width;

const HeroScreen = ({ navigation, route }) => {
  const theme = useColorScheme();
  const scrollViewRef = useRef(null);
  const [selected, setSelected] = useState('HOME');

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <ThemedView style={styles.container}>
      <Header
        selected={selected}
        pressHome={() => {
          setSelected('HOME');
        }}
        pressAboutUs={() => {
          setSelected('ABOUT_US');
        }}
        pressWhatWeOffer={() => {
          setSelected('WHAT_WE_OFFER');
        }}
        pressMeetTheTeam={() => {
          setSelected('MEET_THE_TEAM');
        }}
        pressContactUs={() => {
          setSelected('CONTACT_US');
        }}
      />
      <ScrollView>
        {selected === 'HOME' && (
          <ThemedView>
            <TopImage
              image={require('../assets/images/screen1440/Hero.png')}
              logo={require('../assets/logo/seyo-logo.png')}
            />

            <WhoWeAre />
            <VisionAndMission />
            <OurExpertise />
            <PlatformWorks />
            <WhyAMMatters />
            <OurSolution />
            <InvestmentAndPartnership />
            <JoinGlobalMovement />
          </ThemedView>
        )}
        {selected === 'ABOUT_US' && (
          <ThemedView>
            <AboutUsHero />
            <AboutUsOurCompany />
            <View style={styles.seperator}></View>
            <AboutUsHeadOffice />
            <AboutUsWhatDrivesUs />
          </ThemedView>
        )}
        {selected === 'WHAT_WE_OFFER' && (
          <ThemedView>
            <WhatWeOfferHero />
            <WhatWeOfferBusinessClinic />
            <View style={styles.seperator}></View>
            <WhatWeOfferGuidance />
            <WhatWeOfferBusinessPlan />
            <View style={styles.seperator}></View>
            <WhatWeOfferTraining />
            <WhatWeOfferCustomerSupport />
            <WhatWeOfferRevenueModel />
          </ThemedView>
        )}
        <Footer />
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderTopColor: Colors.gray,
    width: windowWidth,
    borderTopWidth: 2,
  },
  text1: {
    fontSize: 55,
    fontFamily: 'bold',
    lineHeight: 65,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default HeroScreen;
