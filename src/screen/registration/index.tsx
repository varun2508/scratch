import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { register } from '../../apis/auth';
import { emailValidation } from '../../utils/validations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingRight: 38,
    paddingLeft: 38,
  },
  slideContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30%',
  },
  slide1: {
    backgroundColor: '#FFF',
  },
  slide2: {
    backgroundColor: '#FFF',
  },
  slide3: {
    backgroundColor: '#FFF',
  },
  textColor: {
    color: '#4F4F4F',
    fontSize: 14,
  },
  H1: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#4F4F4F',
    marginBottom: 11,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#4F4F4F',
    width: '100%',
    marginBottom: 12,
    fontSize: 16,
  },
});

class RegistrationScreen extends React.Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    acceptTerms: false,
  };

  navigateTo = (screenName): void => {
    const { navigation } = this.props;
    navigation.navigate(screenName);
  };

  handleRegistration = () => {
    const { email, password, passwordConfirmation } = this.state;
    if (password !== passwordConfirmation) {
      Alert.alert('Passwords don`t much!');
      return;
    }
    if (emailValidation(email)) {
      register({
        email,
        password,
        isActive: true,
        userType: 'client',
        tockens: 200,
      });
    } else {
      Alert.alert('Please enter a valid email');
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.slideContainer}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={20}
            behavior='padding'
            enabled
          >
            <View
              style={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ marginBottom: 24 }}
                source={require('image/logo.png')}
              />
              <Text style={styles.H1}>Create account</Text>
              <TextInput
                style={styles.input}
                textAlign='center'
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                placeholder='Your email'
                autoCapitalize='none'
                placeholderTextColor='#828282'
              />
              <TextInput
                textAlign='center'
                placeholderTextColor='#828282'
                style={styles.input}
                onChangeText={(password) => this.setState({ password })}
                placeholder='Password'
                secureTextEntry
                textContentType='password'
                value={this.state.password}
              />
              <TextInput
                textAlign='center'
                placeholderTextColor='#828282'
                style={styles.input}
                onChangeText={(passwordConfirmation) =>
                  this.setState({ passwordConfirmation })
                }
                placeholder='Repeat password'
                secureTextEntry
                value={this.state.confirmPassword}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{}}>I accept the</Text>
            <Text style={{ color: '#4F4F4F', textDecorationLine: 'underline' }}>
              Terms and Conditions & Privacy Policy.
            </Text>
          </View>
          <TouchableOpacity onPress={this.handleRegistration}>
            <View
              style={{
                backgroundColor: '#FBDC42',
                borderRadius: 25,
                width: 200,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 12,
              }}
            >
              <Text
                style={{ color: '#333333', fontSize: 16, fontWeight: 'bold' }}
              >
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 30,
            }}
          >
            <Text
              style={{ color: '#828282', fontWeight: 'bold', fontSize: 16 }}
            >
              Have an account?{'  '}
            </Text>
            <TouchableOpacity onPress={() => this.navigateTo('LoginScreen')}>
              <View style={{}}>
                <Text
                  style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}
                >
                  Log in
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default RegistrationScreen;
