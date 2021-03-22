import React from 'react';
import { Text } from 'react-native-elements';
import {
  View, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';

const NewSessionScreen = () => {
  const weeks = [
    { day: 'Mon' },
    { day: 'Tue' },
    { day: 'Wed' },
    { day: 'Thu' },
    { day: 'Fri' },
    { day: 'Sat' },
    { day: 'Sun' },
  ];
  const times = [
    { set: '' }, { set: '' }, { set: '' }, { set: '6:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '7:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '8:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '9:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '10:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '11:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '12:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '13:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '14:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '15:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '16:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '17:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '18:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '19:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '20:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '21:00' }, { set: '' }, { set: '' }, { set: '' },
    { set: '' }, { set: '' }, { set: '' }, { set: '22:00' }, { set: '' }, { set: '' }, { set: '' },
  ];

  return (
    <View style={styles.border}>
      <FlatList
        keyExtractor={(week) => week.day}
        data={weeks}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.day}>
            <Text>{item.day}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        keyExtractor={(time) => time.day}
        data={times}
        numColumns={7}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.set}>
            <Text style={styles.text}>{item.set}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    marginTop: 30,
    alignItems: 'center',
  },
  day: {
    height: 40,
    width: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.6,
    alignItems: 'center',
  },
  set: {
    height: 30,
    width: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.6,
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
  },

});

export default NewSessionScreen;
