import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DashedLine from './DashedLine';

const ProgressBar = ({ progress }) => (
  <View style={styles.progressBarBackgroundStyle}>
    <View style={styles.progressBarStyle} width={`${progress}%`}>
      <Text style={styles.progressTextStyle}>
        {progress}
        %
      </Text>
      <DashedLine progress={progress} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  progressBarBackgroundStyle: {
    width: '95%',
    height: 35,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(145, 190, 240, 1.0)',
  },
  progressBarStyle: {
    height: 32,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(145, 190, 240, 0.6)',
  },
  progressTextStyle: {
    alignSelf: 'flex-end',
    marginRight: 3,
    color: 'white',
    fontSize: 20,
  },
});

export default ProgressBar;
