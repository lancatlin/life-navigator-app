import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => (
  <View style={styles.progressBarBackgroundStyle}>
    <View style={styles.progressBarStyle} width={3.75 * progress}>
      <Text style={styles.progressTextStyle}>
        {progress}
        %
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  progressBarBackgroundStyle: {
    width: 375,
    height: 40,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(145, 190, 240, 0.3)',
  },
  progressBarStyle: {
    height: 40,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(145, 190, 240, 1.0)',
  },
  progressTextStyle: {
    alignSelf: 'flex-end',
    marginRight: 3,
    color: 'white',
    fontSize: 20,
  },
});

export default ProgressBar;
