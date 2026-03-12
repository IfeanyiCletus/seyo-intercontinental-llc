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
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import WhetherYouAreView from './WhetherYouAreView';

const windowWidth = Dimensions.get('window').width;

export default function JoinGlobalMovement(props) {
  const theme = useColorScheme();

  return (
    <ImageBackground
      source={require('../../assets/images/screen1440/section.png')}
      style={styles.container}
    >
      <View>
        <Text style={styles.text1}>Join a Global Movement</Text>
        <Text style={styles.text1}>of Mentorship</Text>
      </View>
      <Text style={styles.text2}>Whether you are:</Text>
      <View style={styles.container1}>
        <WhetherYouAreView text={'An entrepreneur seeking clarity'} />
        <WhetherYouAreView text={'An individual navigating life decisions'} />
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <WhetherYouAreView text={'A mentor ready to serve globally'} />
        <WhetherYouAreView text={'A partner seeking impact'} />
      </View>

      <Text style={styles.text3}>ACCESS MENTOR is your platform</Text>
      <Pressable style={styles.container3}>
        <Text style={styles.text4}>Get started today</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 823,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'row',
    marginBottom: 20,
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
  text2: {
    fontFamily: 'light',
    lineHeight: 32,
    fontSize: 22,
    color: Colors.gray,
    marginVertical: 40,
  },
  text3: {
    fontSize: 30,
    fontFamily: 'bold',
    lineHeight: 36,
    color: Colors.white,
    marginVertical: 30,
  },
  text4: {
    fontSize: 16,
    fontFamily: 'bold',
    color: Colors.primary,
  },
});
