import React from 'react';
// import { StyleSheet } from 'react-native';
import Sign from '../components/Sign';

const SignupScreen = ({ navigation }) => (
  <>
    <Sign
      title="Signup"
      buttonText="Signup"
      promptText="Already have an account? Sign in"
      callback={() => navigation.navigate('Signin')}
    />
  </>
);

// const styles = StyleSheet.create({});

export default SignupScreen;
