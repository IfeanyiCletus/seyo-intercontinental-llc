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

import JoinGlobalMovement from '../components/items/JoinGlobalMovement';
import InvestmentAndPartnership from '../components/items/InvestmentAndPartnership';
import Footer from '../components/items/Footer';
import AboutUsHero from '../components/items/AboutUs/AboutUsHero';
import AboutUsOurCompany from '../components/items/AboutUs/AboutUsOurCompany';
import AboutUsHeadOffice from '../components/items/AboutUs/AboutUsHeadOffice';
import AboutUsWhatDrivesUs from '../components/items/AboutUs/AboutUsWhatDrivesUs';
import WhatWeOfferHero from '../components/items/WhatWeOffer.js/WhatWeOfferHero';
import WhatWeOfferBusinessClinic from '../components/items/WhatWeOffer.js/WhatWeOfferBusinessClinic';
import WhatWeOfferGuidance from '../components/items/WhatWeOffer.js/WhatWeOfferGuidance';
import WhatWeOfferBusinessPlan from '../components/items/WhatWeOffer.js/WhatWeOfferBusinessPlan';
import WhatWeOfferTraining from '../components/items/WhatWeOffer.js/WhatWeOfferTraining';
import WhatWeOfferCustomerSupport from '../components/items/WhatWeOffer.js/WhatWeOfferCustomerSupport';
import WhatWeOfferRevenueModel from '../components/items/WhatWeOffer.js/WhatWeOfferTransparentRevenueModel';
import ContactUsHero from '../components/items/ContactUsHero/ContactUsHero';
import ContactForm from '../components/items/ContactUsHero/ContactForm';
import MeetTheTeamHero from '../components/items/MeetTheTeam/MeetTheTeamHero';
import MeetTheTeamMembers from '../components/items/MeetTheTeam/MeetTheTeamMembers';

const windowWidth = Dimensions.get('window').width;

const HeroScreen = ({ navigation, route }) => {
  const theme = useColorScheme();

  const scrollViewRef = useRef(null);
  const [selected, setSelected] = useState('HOME');

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  const scrollToPosition = (y) => {
    scrollViewRef.current?.scrollTo({ y, animated: true });
  };
  return (
    <ThemedView style={styles.container}>
      <Header
        selected={selected}
        pressHome={() => {
          setSelected('HOME');
          scrollToPosition(0);
        }}
        pressAboutUs={() => {
          setSelected('ABOUT_US');
          scrollToPosition(0);
        }}
        pressWhatWeOffer={() => {
          setSelected('WHAT_WE_OFFER');
          scrollToPosition(0);
        }}
        pressMeetTheTeam={() => {
          setSelected('MEET_THE_TEAM');
          scrollToPosition(0);
        }}
        pressContactUs={() => {
          setSelected('CONTACT_US');
          scrollToPosition(0);
        }}
      />
      <ScrollView ref={scrollViewRef}>
        {selected === 'HOME' && (
          <ThemedView>
            <TopImage
              image={
                windowWidth >= 1281
                  ? require('../assets/images/screen1440/Hero.png')
                  : windowWidth > 768
                    ? require('../assets/images/screen1280/hero-image.png')
                    : require('../assets/images/screen768/hero-image.png')
              }
              logo={
                windowWidth >= 1281
                  ? require('../assets/logo/seyo-logo.png')
                  : windowWidth > 768
                    ? require('../assets/images/screen1280/seyo-logo.png')
                    : require('../assets/images/screen768/seyo-logo.png')
              }
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
        {selected === 'CONTACT_US' && (
          <ThemedView>
            <ContactUsHero />
            <ContactForm />
          </ThemedView>
        )}
        {selected === 'MEET_THE_TEAM' && (
          <ThemedView>
            <MeetTheTeamHero />
            <MeetTheTeamMembers />
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
