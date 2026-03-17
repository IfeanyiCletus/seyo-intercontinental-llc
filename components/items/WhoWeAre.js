import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import OfficeView from './OfficeView';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

export default function WhoWeAre(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View2
      source={
        theme === 'light' &&
        require('../../assets/images/screen1440/gradient-1.png')
      }
      style={[
        styles.container,
        {
          width,
          height: isTablet ? 'auto' : 973,
          paddingBottom: isTablet ? 48 : 0,
        },
      ]}
    >
      <View3
        style={[
          styles.container1,
          isTablet && styles.container1Tablet,
          {
            width: width >= 1281 ? '70%' : isTablet ? '100%' : '95%',
            paddingHorizontal: isPhone ? 16 : isTablet ? 24 : 0,
          },
        ]}
      >
        <View3
          style={[styles.mediaColumn, isTablet && styles.mediaColumnTablet]}
        >
          <View3 style={styles.container2}>
            <ThemedText
              style={[
                styles.text1,
                isTablet && styles.text1Tablet,
                isPhone && styles.text1Phone,
              ]}
            >
              WHO
            </ThemedText>
            <ThemedText
              style={[
                styles.text1,
                isTablet && styles.text1Tablet,
                isPhone && styles.text1Phone,
                {
                  textDecorationLine: 'underline',
                  textDecorationColor: Colors.primary,
                  marginLeft: isPhone ? 8 : 10,
                },
              ]}
            >
              WE ARE
            </ThemedText>
          </View3>
          <View3 style={[styles.imageRow, isPhone && styles.imageRowPhone]}>
            <Image
              source={require('../../assets/images/screen1440/image1.png')}
              style={[
                styles.image1,
                isTablet && styles.image1Tablet,
                isPhone && styles.image1Phone,
              ]}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/images/screen1440/image2.png')}
              style={[
                styles.image2,
                isTablet && styles.image2Tablet,
                isPhone && styles.image2Phone,
              ]}
              resizeMode="contain"
            />
          </View3>
          <View3 style={isTablet && styles.officeBadgeWrapTablet}>
            <OfficeView
              text1={'Based in USA'}
              text2={'Serving Globally'}
              borderWidth={2}
            />
          </View3>

          <View3
            style={[styles.image3Wrap, isTablet && styles.image3WrapTablet]}
          >
            <Image
              source={require('../../assets/images/screen1440/image3.png')}
              style={[
                styles.image3,
                isTablet && styles.image3Tablet,
                isPhone && styles.image3Phone,
              ]}
              resizeMode="contain"
            />
          </View3>
        </View3>
        <View3
          style={[
            styles.copyColumn,
            isTablet && styles.copyColumnTablet,
            isPhone && styles.copyColumnPhone,
          ]}
        >
          <View3 style={{ marginTop: isTablet ? 0 : 100 }}>
            <ThemedText
              style={[
                styles.text2,
                isTablet && styles.text2Tablet,
                isPhone && styles.text2Phone,
              ]}
            >
              <ThemedText style={[styles.text2, { fontFamily: 'bold' }]}>
                ACCESS MENTOR
              </ThemedText>{' '}
              is a global online mentorship and consulting platform created by{' '}
              <ThemedText style={[styles.text2, { fontFamily: 'bold' }]}>
                SEYO INTERCONTINENTAL LLC
              </ThemedText>
              , an American-based company committed to solving real-world
              challenges faced by entrepreneurs and individuals.
            </ThemedText>
            <View3
              style={{
                marginTop: isPhone ? 36 : isTablet ? 56 : 150,
                alignItems: isTablet ? 'flex-start' : 'flex-end',
              }}
            >
              <ThemedText
                style={[
                  styles.text2,
                  isTablet && styles.text2Tablet,
                  isPhone && styles.text2Phone,
                ]}
              >
                We exist because access to quality mentorship, professional
                counselling, and business guidance remains limited across many
                regions.{' '}
                <ThemedText style={[styles.text2, { fontFamily: 'bold' }]}>
                  ACCESS MENTOR{' '}
                </ThemedText>
                bridges that gap by connecting knowledge with need across
                borders, languages, and cultures.
              </ThemedText>
            </View3>
          </View3>
        </View3>
      </View3>
      <View
        style={{
          alignSelf: 'center',
          marginTop: isTablet ? 24 : 0,
          paddingHorizontal: isPhone ? 16 : 0,
        }}
      >
        <OfficeView
          text1={'Head Office'}
          text2={'1910 Thomes Ave, Cheyenne, WY 82001, United States'}
        />
      </View>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginBottom: 40,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginVertical: 30,
  },
  container1Tablet: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 32,
  },
  mediaColumn: {
    marginRight: 50,
  },
  mediaColumnTablet: {
    marginRight: 0,
  },
  container2: {
    flexDirection: 'row',
    marginTop: 60,
    width: '70%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  imageRowPhone: {
    alignItems: 'center',
  },
  image1: {
    width: 247,
    height: 259,
    marginRight: 40,
  },
  image1Tablet: {
    width: 170,
    height: 178,
    marginRight: 20,
  },
  image1Phone: {
    width: 120,
    height: 126,
    marginRight: 12,
  },
  image2: {
    width: 288,
    height: 346,
  },
  image2Tablet: {
    width: 198,
    height: 238,
  },
  image2Phone: {
    width: 144,
    height: 173,
  },
  image3Wrap: {
    alignSelf: 'flex-end',
  },
  image3WrapTablet: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  image3: {
    width: 521,
    height: 346,
  },
  image3Tablet: {
    width: 360,
    height: 239,
  },
  image3Phone: {
    width: 260,
    height: 173,
  },
  officeBadgeWrapTablet: {
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  copyColumn: {
    width: '33%',
  },
  copyColumnTablet: {
    width: '100%',
  },
  copyColumnPhone: {
    width: '100%',
  },
  text1: {
    fontSize: 40,
    fontFamily: 'medium',
  },
  text1Tablet: {
    fontSize: 32,
  },
  text1Phone: {
    fontSize: 26,
  },
  text2: {
    fontSize: 24,
    fontFamily: 'light',
    lineHeight: 42,
    textAlign: 'right',
  },
  text2Tablet: {
    fontSize: 20,
    lineHeight: 34,
    textAlign: 'left',
  },
  text2Phone: {
    fontSize: 17,
    lineHeight: 28,
  },
});
