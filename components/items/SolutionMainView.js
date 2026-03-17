import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import ThemedView from './ThemedView';
import SolutionView from './SolutionView';

export default function SolutionMainView(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isPhone = width <= 430;

  return (
    <ThemedView
      style={[
        styles.container,
        theme === 'dark' && { borderColor: Colors.white01 },
      ]}
    >
      <ImageBackground
        source={props.uri}
        style={[styles.container1, { height: isPhone ? 72 : 80 }]}
      >
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
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.gray,
    width: '100%',
    maxWidth: 420,
    marginVertical: 12,
  },
  container1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    marginBottom: 20,
    borderBottomRadius: 20,
    overflow: 'visible',
  },
});
