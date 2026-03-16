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

const windowWidth = Dimensions.get('window').width;
let divider = windowWidth >= 1281 ? 6 : 5;
export default function ExpertiseView(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View3
      style={[
        styles.container,
        theme === 'light' && {
          backgroundColor: Colors.white,
          borderColor: Colors.gray,
        },
      ]}
    >
      <View3>
        <Ionicons name={props.icon} size={40} color={Colors.primary} />
      </View3>
      <View3
        style={{ marginVertical: 20, height: 70, justifyContent: 'center' }}
      >
        <ThemedText style={styles.text}>{props.text}</ThemedText>
      </View3>
      <View3>
        <View3 style={styles.container1}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primary}
          />
          <ThemedText
            style={windowWidth >= 1440 ? styles.text1 : styles.text1A}
          >
            {props.text1}
          </ThemedText>
        </View3>
        <View3 style={styles.container1}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primary}
          />
          <ThemedText
            style={windowWidth >= 1440 ? styles.text1 : styles.text1A}
          >
            {props.text2}
          </ThemedText>
        </View3>
        <View3 style={styles.container1}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primary}
          />
          <ThemedText
            style={windowWidth >= 1440 ? styles.text1 : styles.text1A}
          >
            {props.text3}
          </ThemedText>
        </View3>
      </View3>
      <Pressable
        style={{ marginTop: 50, marginBottom: 20 }}
        onPress={props.onPress}
      >
        <ThemedText
          style={windowWidth >= 1440 ? styles.text2 : styles.text2A}
        >{`Learn More >`}</ThemedText>
      </Pressable>
    </View3>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.white01,
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginRight: 30,
    width: windowWidth / divider,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },

  text: {
    fontSize: windowWidth >= 1281 ? 22 : 20,
    fontFamily: 'bold',
    lineHeight: 26,
  },
  text1: {
    marginLeft: 20,
    fontFamily: 'medium',
    fontSize: 16,
  },
  text1A: {
    marginLeft: 20,
    fontFamily: 'medium',
    fontSize: 14,
  },
  text2: {
    fontFamily: 'bold',
    fontSize: 16,
    color: Colors.primary,
  },
  text2A: {
    fontFamily: 'bold',
    fontSize: 14,
    color: Colors.primary,
  },
});
