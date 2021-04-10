import React from 'react';
import { ScrollView } from 'react-native';
import Sign from '../components/Sign';

const SigninScreen = ({ navigation }) => (
  <ScrollView>
    <Sign
      title="Signin"
      buttonText="Sign in"
      promptText="Don't have an account yet? Sign up"
      callback={() => navigation.navigate('Signup')}
    />
  </ScrollView>
);

// const styles = StyleSheet.create({});

export default SigninScreen;
