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
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';

const windowWidth = Dimensions.get('window').width;

export default function MeetTheTeamHero(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <ImageBackground
      source={require('../../../assets/images/screen1440/meet-the-team-hero.png')}
      style={styles.container}
    >
      <View style={styles.container1}>
        <ThemedText style={styles.text2}>Meet Our Expert Team</ThemedText>
      </View>
      <View>
        <ThemedText style={styles.text}>Leadership & Mentors</ThemedText>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <ThemedText style={styles.text1}>
          World-class professionals dedicated to your success
        </ThemedText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowWidth > 1280 ? 720 : 578,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    backgroundColor: Colors.primary3,
    borderRadius: 10,
  },
  text: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'light',
    lineHeight: 32,
    color: Colors.gray,
  },
  text2: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 32,
    color: Colors.gray,
    marginLeft: 10,
  },
});
