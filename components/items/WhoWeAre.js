import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
} from 'react-native';
import Colors from '../constants/Colors';
import OfficeView from './OfficeView';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

const windowWidth = Dimensions.get('window').width;

export default function WhoWeAre(props) {
  const theme = useColorScheme();
  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;
  return (
    <View2
      source={
        theme === 'light' &&
        require('../../assets/images/screen1440/gradient-1.png')
      }
      style={styles.container}
    >
      <View3 style={styles.container1}>
        <View3 style={{ marginRight: 50 }}>
          <View3 style={styles.container2}>
            <ThemedText style={styles.text1}>WHO</ThemedText>
            <ThemedText
              style={[
                styles.text1,
                {
                  textDecorationLine: 'underline',
                  textDecorationColor: Colors.primary,
                  marginLeft: 10,
                },
              ]}
            >
              WE ARE
            </ThemedText>
          </View3>
          <View3 style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Image
              source={require('../../assets/images/screen1440/image1.png')}
              height={259}
              width={247}
              style={{ marginRight: 40 }}
            />
            <Image
              source={require('../../assets/images/screen1440/image2.png')}
              height={346}
              width={288}
            />
          </View3>
          <OfficeView
            text1={'Based in USA'}
            text2={'Serving Globally'}
            borderWidth={2}
          />

          <View3 style={{ alignSelf: 'flex-end' }}>
            <Image
              source={require('../../assets/images/screen1440/image3.png')}
              height={346}
              width={521}
            />
          </View3>
        </View3>
        <View3
          style={{
            width: '33%',
          }}
        >
          <View3 style={{ marginTop: 100 }}>
            <ThemedText style={styles.text2}>
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
            <View3 style={{ marginTop: 150, alignItems: 'flex-end' }}>
              <ThemedText style={styles.text2}>
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
      <View style={{ alignSelf: 'center' }}>
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
    width: windowWidth,
    alignSelf: 'center',
    height: 973,
    marginBottom: 40,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '70%',
    alignSelf: 'center',
    marginVertical: 30,
  },
  container2: {
    flexDirection: 'row',
    marginTop: 60,
    width: '70%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  text1: {
    fontSize: 40,
    fontFamily: 'medium',
  },
  text2: {
    fontSize: 24,
    fontFamily: 'light',
    lineHeight: 42,
    textAlign: 'right',
  },
});
