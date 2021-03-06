import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from '../components/ProgressBar';

const GoalDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.expireTextStyle}>Expire at </Text>
        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Ionicons
              name="rocket-outline"
              style={styles.iconStyle}
            />
            <Text style={styles.startTextStyle}>Start now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ProgressBar
        progress={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    marginHorizontal: 20
  },
  expireTextStyle: {
    flex: 1,
    fontSize: 16,
    color: 'grey',
    textAlignVertical: 'center'
  },
  buttonStyle: {
    alignItems: 'flex-end'
  },
  iconStyle: {
    fontSize: 38
  },
  startTextStyle: {
    fontSize: 10
  }
});

export default GoalDetailScreen;
