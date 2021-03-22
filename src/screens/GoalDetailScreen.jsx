import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import StartButton from '../components/StartButton';
import ProgressBar from '../components/ProgressBar';

const GoalDetailScreen = ({ route }) => (
  <View style={styles.containerStyle}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.expireTextStyle}>
        {`Expire at ${route.params.expireTime}`}
      </Text>
      <StartButton />
    </View>
    <ProgressBar progress={route.params.progress} />
    <View style={styles.timeSetContainerStyle}>
      <Text style={styles.timeSetTextStyle}>Elapsed Time</Text>
      <TextInput style={styles.textInputStyle} />
    </View>
    <View style={styles.timeSetContainerStyle}>
      <Text style={styles.timeSetTextStyle}>Remaining Time</Text>
      <TextInput style={styles.textInputStyle} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  expireTextStyle: {
    flex: 1,
    fontSize: 16,
    color: 'grey',
    textAlignVertical: 'center',
  },
  buttonStyle: {
    alignItems: 'flex-end',
  },
  iconStyle: {
    fontSize: 38,
  },
  startTextStyle: {
    fontSize: 10,
  },
  timeSetContainerStyle: {
    flexDirection: 'row',
    marginVertical: 25,
    marginHorizontal: 15,
  },
  timeSetTextStyle: {
    fontSize: 22,
    flex: 1,
  },
  textInputStyle: {
    width: 150,
    fontSize: 24,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default GoalDetailScreen;
