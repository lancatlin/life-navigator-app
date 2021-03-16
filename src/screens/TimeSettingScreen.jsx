import React from 'react';
import { Text } from 'react-native-elements';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TimeSettingScreen = () => {
  const weeks = [
    { day: 'Mon' },
    { day: 'Tue' },
    { day: 'Wed' },
    { day: 'Thu' },
    { day: 'Fri' },
    { day: 'Sat' },
    { day: 'Sun' },
  ];

  return (
    <FlatList
      keyExtractor={(week) => week.day}
      data={weeks}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.day}>
          <Text>{item.day}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  day: {
    height: 20,
    width: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'center',
  },
});

export default TimeSettingScreen;
