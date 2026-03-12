import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  View,
  useColorScheme,
} from 'react-native';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function OfficeView(props) {
  const theme = useColorScheme();
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View style={[styles.container, props.borderWidth && { borderWidth: 2 }]}>
      <Ionicons name="location" size={30} color={Colors.primary} />
      <View style={{ marginLeft: 10 }}>
        <ThemedText style={styles.text}>{props.text1}</ThemedText>
        <ThemedText style={styles.text1}>{props.text2}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    // borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.white05,
  },
  text: {
    fontSize: 16,
    fontFamily: 'bold',
    lineHeight: 24,
    color: Colors.black,
  },
  text1: {
    fontSize: 14,
    fontFamily: 'medium',
    color: Colors.black,
  },
});
