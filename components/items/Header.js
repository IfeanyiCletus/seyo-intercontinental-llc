import React, { useMemo, useState } from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import Colors from '../constants/Colors';

export default function Header(props) {
  const { width } = useWindowDimensions();
  const [menuVisible, setMenuVisible] = useState(false);

  const isMobile = width <= 768;
  const isCompactMobile = width <= 430;

  const navItems = useMemo(
    () => [
      {
        key: 'HOME',
        label: 'Home',
        onPress: props.pressHome,
      },
      {
        key: 'ABOUT_US',
        label: 'About Us',
        onPress: props.pressAboutUs,
      },
      {
        key: 'WHAT_WE_OFFER',
        label: 'What We Offer',
        onPress: props.pressWhatWeOffer,
      },
      {
        key: 'MEET_THE_TEAM',
        label: 'Meet the Team',
        onPress: props.pressMeetTheTeam,
      },
      {
        key: 'CONTACT_US',
        label: 'Contact Us',
        onPress: props.pressContactUs,
      },
    ],
    [
      props.pressAboutUs,
      props.pressContactUs,
      props.pressHome,
      props.pressMeetTheTeam,
      props.pressWhatWeOffer,
    ]
  );

  const handleNavPress = (onPress) => {
    onPress?.();
    if (isMobile) {
      setMenuVisible(false);
    }
  };

  return (
    <ThemedView
      style={[
        styles.container,
        {
          paddingHorizontal: isMobile ? (isCompactMobile ? 16 : 24) : 20,
        },
      ]}
    >
      <Pressable onPress={() => handleNavPress(props.pressHome)}>
        <Image
          source={require('../../assets/logo/seyo-logo-small.png')}
          style={styles.logo}
        />
      </Pressable>

      {isMobile ? (
        <ThemedView style={styles.mobileMenuWrapper}>
          <Pressable
            onPress={() => setMenuVisible((current) => !current)}
            style={styles.menuButton}
            accessibilityRole="button"
            accessibilityLabel={menuVisible ? 'Hide menu' : 'Show menu'}
          >
            <Ionicons name="menu-outline" size={30} color={Colors.primary} />
          </Pressable>

          {menuVisible && (
            <ThemedView
              style={[
                styles.dropdown,
                {
                  width: isCompactMobile ? 220 : 260,
                  top: isCompactMobile ? 52 : 56,
                },
              ]}
            >
              {navItems.map((item) => (
                <Pressable
                  key={item.key}
                  onPress={() => handleNavPress(item.onPress)}
                  style={[
                    styles.dropdownItem,
                    props.selected === item.key && styles.dropdownItemActive,
                  ]}
                >
                  <ThemedText
                    style={[
                      styles.dropdownText,
                      props.selected === item.key && styles.dropdownTextActive,
                    ]}
                  >
                    {item.label}
                  </ThemedText>
                </Pressable>
              ))}
            </ThemedView>
          )}
        </ThemedView>
      ) : (
        <ThemedView style={styles.navigators}>
          {navItems.map((item) => (
            <Pressable key={item.key} onPress={() => handleNavPress(item.onPress)}>
              <ThemedText
                style={[
                  styles.text,
                  props.selected === item.key && styles.text1,
                ]}
              >
                {item.label}
              </ThemedText>
            </Pressable>
          ))}
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 20,
  },
  logo: {
    width: 67,
    height: 61,
  },
  navigators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  text: {
    fontFamily: 'medium',
    fontSize: 16,
    lineHeight: '100%',
  },
  text1: {
    fontSize: 20,
    color: Colors.primary,
  },
  mobileMenuWrapper: {
    position: 'relative',
    alignItems: 'flex-end',
  },
  menuButton: {
    padding: 4,
  },
  dropdown: {
    position: 'absolute',
    right: 0,
    borderRadius: 14,
    paddingVertical: 8,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 10,
  },
  dropdownItem: {
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  dropdownItemActive: {
    backgroundColor: '#F6F8FB',
  },
  dropdownText: {
    fontFamily: 'medium',
    fontSize: 16,
    color: Colors.black,
  },
  dropdownTextActive: {
    color: Colors.primary,
  },
});
