import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';

const DashedLine = ({ progress }) => (
  <View style={styles.dashedLineStyle}>
    <Text>{progress}</Text>
  </View>
);

const styles = StyleSheet.create({
  dashedLineStyle: {
    position: 'absolute',
    width: '100%',
    height: 35,
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderRightWidth: 1,
  },
});

export default DashedLine;
