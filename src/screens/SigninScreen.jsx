import React, { useContext } from 'react';
import Sign from '../components/Sign';
import { Context } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
  const { signIn } = useContext(Context);
  return (
    <>
      <Sign
        title="Sign in"
        buttonText="Sign in"
        callback={signIn}
        promptText="Don't have an account yet? Sign up"
        switchCallback={() => navigation.navigate('Signup')}
      />
    </>
  );
};

// const styles = StyleSheet.create({});

export default SigninScreen;
