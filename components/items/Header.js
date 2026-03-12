import React from 'react';
import { Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;

export default function Header(props) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{}}>
        <Pressable onPress={props.pressHome}>
          <Image
            source={require('../../assets/logo/seyo-logo-small.png')}
            height={61}
            width={67}
          />
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.navigators}>
        <Pressable onPress={props.pressHome}>
          <ThemedText
            style={[styles.text, props.selected === 'HOME' && styles.text1]}
          >
            Home
          </ThemedText>
        </Pressable>
        <Pressable onPress={props.pressAboutUs}>
          <ThemedText
            style={[styles.text, props.selected === 'ABOUT_US' && styles.text1]}
          >
            About Us
          </ThemedText>
        </Pressable>
        <Pressable onPress={props.pressWhatWeOffer}>
          <ThemedText
            style={[
              styles.text,
              props.selected === 'WHAT_WE_OFFER' && styles.text1,
            ]}
          >
            What We Offer
          </ThemedText>
        </Pressable>
        <Pressable onPress={props.pressMeetTheTeam}>
          <ThemedText
            style={[
              styles.text,
              props.selected === 'MEET_THE_TEAM' && styles.text1,
            ]}
          >
            Meet the Team
          </ThemedText>
        </Pressable>
        <Pressable onPress={props.pressContactUs}>
          <ThemedText
            style={[
              styles.text,
              props.selected === 'CONTACT_US' && styles.text1,
            ]}
          >
            Contact Us
          </ThemedText>
        </Pressable>
      </ThemedView>
      <ThemedView></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    width: windowWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  navigators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  text: {
    fontFamily: 'medium',
    fontSize: 16,
    lineHeight: '100%',
  },
  text1: {
    fontSize: 20,

    color: Colors.primary,
  },
});
