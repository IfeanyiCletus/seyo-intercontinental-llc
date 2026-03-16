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
import SolutionView from './SolutionView';

const windowWidth = Dimensions.get('window').width;
let divider = windowWidth > 1280 ? 3.5 : 2.9;
export default function SolutionMainView(props) {
  const theme = useColorScheme();

  return (
    <ThemedView
      style={[
        styles.container,
        theme === 'dark' && { borderColor: Colors.white01 },
      ]}
    >
      <ImageBackground source={props.uri} style={styles.container1}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'bold',
            color: Colors.white,
          }}
        >
          {props.text}
        </Text>
      </ImageBackground>
      <ThemedView style={styles.container2}>
        <SolutionView icon={props.icon1} text={props.text1} />
        <SolutionView icon={props.icon2} text={props.text2} />
        <SolutionView icon={props.icon3} text={props.text3} />
        <SolutionView icon={props.icon4} text={props.text4} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'bold',
    lineHeight: 24,
    marginLeft: 20,
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  container1: {
    width: windowWidth / divider,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    marginBottom: 20,
    borderBottomRadius: 20,
    overflow: 'visible',
  },
});
