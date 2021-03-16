import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StartButton from '../components/StartButton';
import ProgressBar from '../components/ProgressBar';

const GoalDetailScreen = ({ route }) => (
  <View style={styles.containerStyle}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.expireTextStyle}>
        Expire at
        {' '}
        {route.params.expireTime}
      </Text>
      <StartButton />
    </View>
    <ProgressBar progress={route.params.progress} />
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
});

export default GoalDetailScreen;
