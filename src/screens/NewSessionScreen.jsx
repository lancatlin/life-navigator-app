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
  const timeShows = [];
  for (let j = 6; j < 23; j += 1) {
    timeShows.push(`${j}:00`);
  }
  let times = new Array(17 * 7).fill('');
  times = times.map((_, i) => `${i}`);

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
        data={timeShows}
        keyExtractor={(timeShow) => timeShow}// add key
        renderItem={({ item }) => (
          <SafeAreaView
            style={styles.set}
          >
            <Text style={styles.text}>{item}</Text>
          </SafeAreaView>
        )}
      />
      <FlatList
        data={times}
        keyExtractor={(time) => time}
        extraData={selected}
        numColumns={7}
        renderItem={() => (
          <TouchableOpacity
            style={styles.set}
            activeOpacity={0.2}
          />
        )}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  border: {
    marginTop: 30,
    width: 350,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  time: {
    height: 30,
    width: 50,
    borderWidth: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  set: {
    height: 30,
    width: 50,
    borderWidth: 0.6,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 13,
  },

});

export default NewSessionScreen;
