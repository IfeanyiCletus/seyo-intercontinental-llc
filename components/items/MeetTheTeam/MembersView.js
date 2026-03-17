import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function MembersView(props) {
  const { width } = useWindowDimensions();
  const isPhone = width <= 430;
  const isTablet = width <= 780;

  return (
    <View
      style={[
        styles.container3,
        !isPhone && !isTablet && { width: width / 2.5 },
      ]}
    >
      <ImageBackground
        source={props.image}
        style={[
          styles.imageContainer,
          { height: width > 1280 ? 470 : width <= 430 ? 270 : 390 },
        ]}
      >
        <View style={{}}>
          <Text style={[styles.text2, isPhone && styles.text2Phone]}>
            {props.name}
          </Text>
          <Text style={[styles.text3, isPhone && styles.text3Phone]}>
            {props.title}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Ionicons name="briefcase-outline" size={24} color={Colors.primary} />
          <Text style={[styles.text4, isPhone && styles.text4Phone]}>
            {props.position}
          </Text>
        </View>
        <View>
          <Text style={[styles.text5, isPhone && styles.text5Phone]}>
            {props.text1}
          </Text>
        </View>

        {props.showFull && (
          <View>
            <View>
              <Text style={[styles.text5, isPhone && styles.text5Phone]}>
                {props.text2}
              </Text>
              <Text style={[styles.text5, isPhone && styles.text5Phone]}>
                {props.text3}
              </Text>
            </View>
            <View style={styles.container2}>
              <Ionicons
                name="ribbon-outline"
                size={24}
                color={Colors.primary}
              />
              <Text style={[styles.text4, isPhone && styles.text4Phone]}>
                Expertise
              </Text>
            </View>
            <View>
              <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                {props.expertise1}
              </Text>
              <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                {props.expertise2}
              </Text>
              <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                {props.expertise3}
              </Text>
              <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                {props.expertise4}
              </Text>
              {props.expertise5 && (
                <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                  {props.expertise5}
                </Text>
              )}
              {props.expertise6 && (
                <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                  {props.expertise6}
                </Text>
              )}
            </View>
            <View style={styles.container2}>
              <Ionicons
                name="document-outline"
                size={24}
                color={Colors.primary}
              />
              <Text style={[styles.text4, isPhone && styles.text4Phone]}>
                Credentials and Achievements
              </Text>
            </View>
            <View>
              <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                {props.achievement1}
              </Text>
              <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                {props.achievement2}
              </Text>
              <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                {props.achievement3}
              </Text>
              {props.achievement4 && (
                <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                  {props.achievement4}
                </Text>
              )}
              {props.achievement5 && (
                <Text style={[styles.text5A, isPhone && styles.text5APhone]}>
                  {props.achievement5}
                </Text>
              )}
            </View>
          </View>
        )}

        <Pressable style={styles.buttonContainer} onPress={props.onPress}>
          <Text
            style={[styles.pressText, isPhone && styles.pressTextPhone]}
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
    width: '100%',
    minWidth: 410,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
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
  text2Phone: {
    fontSize: 18,
    lineHeight: 22,
  },
  text3: {
    fontSize: 14,
    fontFamily: 'light',
    color: Colors.gray,
  },
  text3Phone: {
    fontSize: 12,
    lineHeight: 16,
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
    width: '100%',
  },
  text4: {
    fontFamily: 'light',
    fontSize: 15,
    color: Colors.black,
    marginLeft: 10,
  },
  text4Phone: {
    fontSize: 13,
    lineHeight: 20,
  },
  text5: {
    fontFamily: 'light',
    fontSize: 14,
    color: Colors.black,
    lineHeight: 26,
    marginTop: 20,
  },
  text5Phone: {
    fontSize: 13,
    lineHeight: 22,
  },
  text5A: {
    fontFamily: 'light',
    fontSize: 14,
    color: Colors.black,
    lineHeight: 26,
    marginTop: 5,
  },
  text5APhone: {
    fontSize: 13,
    lineHeight: 22,
  },
  pressText: {
    fontSize: 14,
    fontFamily: 'medium',
    color: Colors.primary,
  },
  pressTextPhone: {
    fontSize: 13,
  },
});
