import React, { useState } from 'react';
import { Text } from 'react-native-elements';
import {
  SafeAreaView, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';

const NewSessionScreen = () => {
  const [selected, setSelected] = useState();
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
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '6:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '7:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '8:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '9:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '10:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '11:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '12:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '13:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '14:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '15:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '16:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '17:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '18:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '19:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '20:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '21:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
    { set: '', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '22:00', select: false }, { set: '', select: false }, { set: '', select: false }, { set: '', select: false },
  ];

  return (
    <SafeAreaView style={styles.border}>
      <FlatList
        keyExtractor={(week) => week.day}
        data={weeks}
        horizontal
        renderItem={({ item }) => (
          <SafeAreaView style={styles.day}>
            <Text>{item.day}</Text>
          </SafeAreaView>
        )}
      />
      <FlatList
        keyExtractor={(time) => time.day}
        data={times}
        keyExtractor={(item, index) => (`${index}1`)} // add key
        extraData={selected}
        numColumns={7}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.set, { backgroundColor }]}
            onPress={() => setSelected(times.select)}
          >
            <Text style={styles.text}>{item.set}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  set: {
    height: 30,
    width: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
  },

});

export default NewSessionScreen;
