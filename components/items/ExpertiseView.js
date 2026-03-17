import React from 'react';
import {
  View,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function ExpertiseView(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  let View3 = theme === 'dark' ? ThemedView : View;
  const isTablet = width <= 768;
  const isPhone = width <= 430;

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
        style={{
          marginVertical: 20,
          minHeight: isPhone ? 54 : isTablet ? 62 : 70,
          justifyContent: 'center',
        }}
      >
        <ThemedText
          style={[
            styles.text,
            isTablet && styles.textTablet,
            isPhone && styles.textPhone,
          ]}
        >
          {props.text}
        </ThemedText>
      </View3>
      <View3>
        <View3 style={styles.container1}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primary}
          />
          <ThemedText style={styles.text1}>{props.text1}</ThemedText>
        </View3>
        <View3 style={styles.container1}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primary}
          />
          <ThemedText style={styles.text1}>{props.text2}</ThemedText>
        </View3>
        <View3 style={styles.container1}>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primary}
          />
          <ThemedText style={styles.text1}>{props.text3}</ThemedText>
        </View3>
      </View3>
      <Pressable
        style={{ marginTop: 50, marginBottom: 20 }}
        onPress={props.onPress}
      >
        <ThemedText style={styles.text2}>{`Learn More >`}</ThemedText>
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
    marginHorizontal: 10,
    width: '100%',
    maxWidth: 320,
    marginVertical: 10,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },

  text: {
    fontSize: 20,
    fontFamily: 'bold',
    lineHeight: 26,
  },
  textTablet: {
    fontSize: 18,
    lineHeight: 24,
  },
  textPhone: {
    fontSize: 17,
    lineHeight: 22,
  },
  text1: {
    marginLeft: 20,
    fontFamily: 'medium',
    fontSize: 14,
    flexShrink: 1,
  },
  text2: {
    fontFamily: 'bold',
    fontSize: 14,
    color: Colors.primary,
  },
});
