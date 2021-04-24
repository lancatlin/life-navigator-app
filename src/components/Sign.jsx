import React, { useState, useContext } from 'react';
import { Text, Input } from 'react-native-elements';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Spacer from './Spacer';
import { Context } from '../context/AuthContext';

const Sign = ({
  title, buttonText, callback, promptText, switchCallback,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errorMsg } = useContext(Context);
  return (
    <View style={styles.border}>
      <Spacer>
        <Text h3 style={styles.header}>{title}</Text>
      </Spacer>
      <Input
        label="Email"
        onChangeText={setEmail}
        value={email}
        autoCorrect={false}
        autoCompleteType="off"
      />
      <Input
        label="Password"
        onChangeText={setPassword}
        value={password}
        autoCorrect={false}
        autoCompleteType="off"
        secureTextEntry
      />
      <Spacer>
        <Text>{errorMsg}</Text>
      </Spacer>
      <Spacer>
        <TouchableOpacity style={styles.Button1} onPress={() => callback(email, password)}>
          <Text style={styles.Text1}>{buttonText}</Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity style={styles.Button2}>
          <Text style={styles.Text2}>Google Login</Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity style={styles.Button3}>
          <Text style={styles.Text2}>Facebook Login</Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={switchCallback}>
          <Text style={styles.promptText}>{promptText}</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    flex: 1,
    marginTop: 40,
  },
  header: {
    marginBottom: 10,
  },
  Button1: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Button2: {
    width: 200,
    height: 50,
    backgroundColor: '#F1A8A8',
    borderRadius: 10,
    borderColor: 'darkred',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Button3: {
    width: 200,
    height: 50,
    backgroundColor: '#C3ECF8',
    borderRadius: 10,
    borderColor: 'darkblue',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Text1: {
    fontSize: 23,
  },
  Text2: {
    fontSize: 15,
  },
  promptText: {
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default Sign;
