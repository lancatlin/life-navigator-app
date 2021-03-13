import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBarBackgroundStyle}>
      <View style={styles.progressBarStyle} width={4*progress}>
        <Text>{progress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarBackgroundStyle: {
    width: 400,
    height: 40,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(145, 190, 240, 0.3)'
  },
  progressBarStyle: {
    height: 40,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'rgba(145, 190, 240, 1.0)'
  }
});

export default ProgressBar;
