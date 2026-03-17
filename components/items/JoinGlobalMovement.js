import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import Colors from '../constants/Colors';
import WhetherYouAreView from './WhetherYouAreView';

export default function JoinGlobalMovement(props) {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 430;

  return (
    <ImageBackground
      source={require('../../assets/images/screen1440/section.png')}
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 823,
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 56 : 0,
        },
      ]}
    >
      <View>
        <Text style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}>
          Join a Global Movement
        </Text>
        <Text style={[styles.text1, isTablet && styles.text1Tablet, isPhone && styles.text1Phone]}>
          of Mentorship
        </Text>
      </View>
      <Text style={[styles.text2, isPhone && styles.text2Phone]}>Whether you are:</Text>
      <View style={styles.container1}>
        <WhetherYouAreView text={'An entrepreneur seeking clarity'} />
        <WhetherYouAreView text={'An individual navigating life decisions'} />
      </View>
      <View style={styles.container1}>
        <WhetherYouAreView text={'A mentor ready to serve globally'} />
        <WhetherYouAreView text={'A partner seeking impact'} />
      </View>

      <Text style={[styles.text3, isPhone && styles.text3Phone]}>
        ACCESS MENTOR is your platform
      </Text>
      <Pressable style={styles.container3}>
        <Text style={styles.text4}>Get started today</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    fontSize: 55,
    fontFamily: 'bold',
    lineHeight: 65,
    color: Colors.white,
    textAlign: 'center',
  },
  text1Tablet: {
    fontSize: 42,
    lineHeight: 50,
  },
  text1Phone: {
    fontSize: 30,
    lineHeight: 38,
  },
  text2: {
    fontFamily: 'light',
    lineHeight: 32,
    fontSize: 22,
    color: Colors.gray,
    marginVertical: 40,
  },
  text2Phone: {
    fontSize: 18,
    lineHeight: 28,
    marginVertical: 28,
  },
  text3: {
    fontSize: 30,
    fontFamily: 'bold',
    lineHeight: 36,
    color: Colors.white,
    marginVertical: 30,
    textAlign: 'center',
  },
  text3Phone: {
    fontSize: 24,
    lineHeight: 30,
  },
  text4: {
    fontSize: 16,
    fontFamily: 'bold',
    color: Colors.primary,
  },
});
