import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Sign from '../components/Sign';

const SigninScreen = () => (
  <ScrollView>
    <Sign
      title="Signin"
      ButtonText="Login"
    />
  </ScrollView>
);

const styles = StyleSheet.create({});

export default SigninScreen;
