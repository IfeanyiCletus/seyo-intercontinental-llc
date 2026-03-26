import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  useColorScheme,
  Pressable,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';

export default function ContactForm(props) {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isTablet = width <= 768;
  const isPhone = width <= 430;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: '',
    message: '',
  });

  const formEndpoint = process.env.EXPO_PUBLIC_CONTACT_FORM_ENDPOINT;
  const isEmailValid =
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const isFormValid =
    name.trim().length > 3 &&
    isEmailValid &&
    subject.trim().length > 5 &&
    message.trim().length > 30;

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async () => {
    if (!isFormValid || isSubmitting) {
      return;
    }

    if (!formEndpoint) {
      setSubmitStatus({
        type: 'error',
        message:
          'Missing contact form endpoint. Set EXPO_PUBLIC_CONTACT_FORM_ENDPOINT and restart the app.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({
      type: '',
      message: '',
    });

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.errors?.[0]?.message ||
            data?.message ||
            'We could not send your message. Please try again.'
        );
      }

      resetForm();
      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent successfully.',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error?.message || 'We could not send your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-1.png')}
      style={[
        styles.container,
        {
          width,
          minHeight: isTablet ? undefined : 973,
          flexDirection: isTablet ? 'column' : 'row',
          paddingHorizontal: isPhone ? 16 : 24,
          paddingVertical: isTablet ? 40 : 0,
        },
      ]}
    >
      <View3
        style={[
          styles.container1,
          {
            width: isTablet ? '100%' : width > 1280 ? width / 3 : width / 2.5,
            marginRight: isTablet ? 0 : 40,
            marginBottom: isTablet ? 24 : 0,
          },
        ]}
      >
        <View style={styles.container2}>
          <View style={styles.iconContainer}>
            <Ionicons name="chatbox-outline" size={24} color={Colors.white} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={[styles.text, isPhone && styles.textPhone]}>
              Send us a message
            </Text>
            <Text style={[styles.text1, isPhone && styles.text1Phone]}>
              We'll respond as soon as possible
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: 'center', width: '90%' }}>
          <View style={styles.textInputContainer}>
            <Text style={styles.text2}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor={Colors.border2}
              style={styles.textInputLight}
              maxLength={30}
            />
            {name.length > 0 && name.length < 2 && (
              <View>
                <Text style={styles.text3}>Name must be at least 2 characters</Text>
              </View>
            )}
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text2}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={Colors.border2}
              style={styles.textInputLight}
              maxLength={50}
            />
            {!isEmailValid && email.length > 3 && (
              <View>
                <Text style={styles.text3}>Invalid Email</Text>
              </View>
            )}
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text2}>Subject</Text>
            <TextInput
              value={subject}
              onChangeText={setSubject}
              placeholder="How can we help you?"
              placeholderTextColor={Colors.border2}
              style={styles.textInputLight}
              maxLength={50}
            />
            {subject.length > 1 && subject.length < 5 && (
              <View>
                <Text style={styles.text3}>
                  Subject must be at least 5 characters
                </Text>
              </View>
            )}
          </View>
          <View style={[styles.textInputContainer, { marginBottom: 5 }]}>
            <Text style={styles.text2}>Message</Text>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Tell us more about your inquiry..."
              placeholderTextColor={Colors.border2}
              style={[styles.textInputLight, { height: 200 }]}
              maxLength={300}
              multiline={true}
            />
            {message.length > 1 && message.length < 30 && (
              <View>
                <Text style={styles.text3}>Message must be at least 30 characters</Text>
              </View>
            )}
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Text style={styles.text1}>{`${message.length}/300`}</Text>
          </View>
          {submitStatus.message ? (
            <Text
              style={[
                styles.submitMessage,
                submitStatus.type === 'error'
                  ? styles.submitMessageError
                  : styles.submitMessageSuccess,
              ]}
            >
              {submitStatus.message}
            </Text>
          ) : null}
          {isFormValid && (
            <Pressable
              style={[
                styles.buttonContainer,
                isSubmitting && styles.buttonContainerDisabled,
              ]}
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'medium',
                  color: Colors.white,
                }}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Text>
            </Pressable>
          )}
        </View>
      </View3>
      <View3
        style={[
          styles.container3,
          { width: isTablet ? '100%' : width > 1280 ? width / 3 : width / 2.5 },
        ]}
      >
        <View3>
          <ThemedText style={[styles.text7, isPhone && styles.text7Phone]}>
            Contact Information
          </ThemedText>
          <View style={styles.border}></View>
          <ThemedText style={[styles.text4, isPhone && styles.text4Phone]}>
            Have questions about our services? Our team is ready to assist you.
            Reach out through any of the channels below.
          </ThemedText>
          <View>
            <View style={styles.container4}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: Colors.lightBlue, marginRight: 20 },
                ]}
              >
                <Ionicons
                  name="location-outline"
                  size={24}
                  color={Colors.primary}
                />
              </View>
              <View>
                <Text style={styles.text5}>Head Office</Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  1910 Thomes Ave
                </Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  Cheyenne, WY 82001
                </Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  United States of America
                </Text>
              </View>
            </View>
            <View style={styles.container4}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: Colors.lightBlue, marginRight: 20 },
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={24}
                  color={Colors.primary}
                />
              </View>
              <View>
                <Text style={styles.text5}>Send your email to:</Text>
                <Text
                  style={[
                    styles.text6,
                    isPhone && styles.text6Phone,
                    { color: Colors.primary },
                  ]}
                >
                  info@accessmentor.com
                </Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  We'll respond within 24 hours
                </Text>
              </View>
            </View>
            <View style={styles.container4}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: Colors.lightPink, marginRight: 20 },
                ]}
              >
                <Ionicons name="call-outline" size={24} color={Colors.purple} />
              </View>
              <View>
                <Text style={styles.text5}>24/7 Support</Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  Call us anytime
                </Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  Available across all time zones
                </Text>
              </View>
            </View>
            <View style={styles.container4}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: Colors.lightGreen, marginRight: 20 },
                ]}
              >
                <Ionicons name="globe-outline" size={24} color={Colors.green} />
              </View>
              <View>
                <Text style={styles.text5}>Global Service</Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  Serving clients worldwide
                </Text>
                <Text style={[styles.text6, isPhone && styles.text6Phone]}>
                  Multilingual support available
                </Text>
              </View>
            </View>
          </View>
        </View3>
      </View3>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  container3: {
    width: '40%',
  },
  container4: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  text: {
    fontFamily: 'bold',
    fontSize: 28,
    lineHeight: 30,
    color: Colors.black,
  },
  textPhone: {
    fontSize: 24,
    lineHeight: 28,
  },
  text7: {
    fontFamily: 'bold',
    fontSize: 28,
    lineHeight: 30,
  },
  text7Phone: {
    fontSize: 24,
    lineHeight: 28,
  },
  text1: {
    fontFamily: 'light',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.black,
  },
  text1Phone: {
    fontSize: 13,
    lineHeight: 18,
  },
  text2: {
    fontFamily: 'medium',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.black,
  },
  text3: {
    color: Colors.red,
    fontSize: 12,
    fontFamily: 'medium',
  },
  text4: {
    fontSize: 16,
    fontFamily: 'light',
    lineHeight: 28,
  },
  text4Phone: {
    lineHeight: 24,
  },
  text5: {
    fontSize: 16,
    fontFamily: 'bold',
    lineHeight: 26,
    marginBottom: 10,
  },
  text6: {
    fontSize: 14,
    fontFamily: 'light',
    lineHeight: 22,
  },
  text6Phone: {
    fontSize: 13,
    lineHeight: 20,
  },
  textInputLight: {
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: 'medium',
    color: Colors.light.icon,
    width: '100%',
    outlineStyle: 'none',
  },
  textInputContainer: {
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContainerDisabled: {
    opacity: 0.7,
  },
  submitMessage: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'medium',
  },
  submitMessageError: {
    color: Colors.red,
  },
  submitMessageSuccess: {
    color: Colors.green,
  },
  border: {
    borderTopColor: Colors.primary,
    borderTopWidth: 3,
    width: 100,
    marginVertical: 20,
  },
});
