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

const windowWidth = Dimensions.get('window').width;

export default function MembersView(props) {
  const theme = useColorScheme();

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View style={styles.container3}>
      <ImageBackground source={props.image} style={styles.imageContainer}>
        <View style={{}}>
          <Text style={styles.text2}>{props.name}</Text>
          <Text style={styles.text3}>{props.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Ionicons name="briefcase-outline" size={24} color={Colors.primary} />
          <Text style={styles.text4}>{props.position}</Text>
        </View>
        <View>
          <Text style={styles.text5}>{props.text1}</Text>
        </View>

        {props.showFull && (
          <View>
            <View>
              <Text style={styles.text5}>{props.text2}</Text>
              <Text style={styles.text5}>{props.text3}</Text>
            </View>
            <View style={styles.container2}>
              <Ionicons
                name="ribbon-outline"
                size={24}
                color={Colors.primary}
              />
              <Text style={styles.text4}>Expertise</Text>
            </View>
            <View>
              <Text style={styles.text5A}>{props.expertise1}</Text>
              <Text style={styles.text5A}>{props.expertise2}</Text>
              <Text style={styles.text5A}>{props.expertise3}</Text>
              <Text style={styles.text5A}>{props.expertise4}</Text>
              {props.expertise5 && (
                <Text style={styles.text5A}>{props.expertise5}</Text>
              )}
              {props.expertise6 && (
                <Text style={styles.text5A}>{props.expertise6}</Text>
              )}
            </View>
            <View style={styles.container2}>
              <Ionicons
                name="document-outline"
                size={24}
                color={Colors.primary}
              />
              <Text style={styles.text4}>Credentials and Achievements</Text>
            </View>
            <View>
              <Text style={styles.text5A}>{props.achievement1}</Text>
              <Text style={styles.text5A}>{props.achievement2}</Text>
              <Text style={styles.text5A}>{props.achievement3}</Text>
              {props.achievement4 && (
                <Text style={styles.text5A}>{props.achievement4}</Text>
              )}
              {props.achievement5 && (
                <Text style={styles.text5A}>{props.achievement5}</Text>
              )}
            </View>
          </View>
        )}

        <Pressable style={styles.buttonContainer} onPress={props.onPress}>
          <Text
            style={styles.pressText}
          >{`${props.showFull ? 'Show Less' : 'Show More'}`}</Text>
          <Ionicons
            name="chevron-up-outline"
            size={24}
            color={Colors.primary}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: Colors.white,
    width: '100%',
    borderBottomRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  container3: {
    width: windowWidth / 2.5,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  shadowContainer: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    lineHeight: 40,
    fontFamily: 'bold',
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'light',
    lineHeight: 28,
  },
  text2: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 26,
    color: Colors.white,
  },
  text3: {
    fontSize: 14,
    fontFamily: 'light',
    color: Colors.gray,
  },
  border: {
    borderTopColor: Colors.primary,
    borderTopWidth: 3,
    marginVertical: 20,
    width: 100,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,
    height: windowWidth > 1280 ? 470 : 291,
    width: '100%',
  },
  text4: {
    fontFamily: 'light',
    fontSize: 15,
    color: Colors.black,
    marginLeft: 10,
  },
  text5: {
    fontFamily: 'light',
    fontSize: 14,
    color: Colors.black,
    lineHeight: 26,
    marginTop: 20,
  },
  text5A: {
    fontFamily: 'light',
    fontSize: 14,
    color: Colors.black,
    lineHeight: 26,
    marginTop: 5,
  },
  pressText: {
    fontSize: 14,
    fontFamily: 'medium',
    color: Colors.primary,
  },
});
