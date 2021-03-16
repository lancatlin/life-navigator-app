import React from 'react';
import { Text } from 'react-native-elements';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';

const PrefferedTimeScreen = () => (
  <View style={styles.border}>
    <TouchableOpacity style={styles.TimeButton}>
      <Text>Morning</Text>
    </TouchableOpacity>
    <Spacer>
      <TouchableOpacity style={styles.TimeButton}>
        <Text>Afternoon</Text>
      </TouchableOpacity>
    </Spacer>
    <TouchableOpacity style={styles.TimeButton}>
      <Text>Evening</Text>
    </TouchableOpacity>
    <Spacer>
      <TouchableOpacity style={styles.NewButton}>
        <Text>New</Text>
      </TouchableOpacity>
    </Spacer>
  </View>
);

const styles = StyleSheet.create({
  border: {
    marginTop: 40,
  },
  TimeButton: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  NewButton: {
    marginTop: 300,
    height: 50,
    width: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default PrefferedTimeScreen;
