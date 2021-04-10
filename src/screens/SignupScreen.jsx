import React, { useContext } from 'react';
// import { StyleSheet } from 'react-native';
import Sign from '../components/Sign';
import { Context } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { signUp } = useContext(Context);
  return (
    <>
      <Sign
        title="Sign up"
        buttonText="Sign up"
        callback={signUp}
        promptText="Already have an account? Sign in"
        switchCallback={() => navigation.navigate('Signin')}
      />
    </>
  );
};

// const styles = StyleSheet.create({});

export default SignupScreen;
