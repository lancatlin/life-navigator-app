import React, { useState } from 'react';
import { Text } from 'react-native-elements';
import {
  SafeAreaView, FlatList, TouchableOpacity, StyleSheet, TextInput, ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const NewSessionScreen = () => {
  const [name, setName] = useState();
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
    <SafeAreaView>
      <SafeAreaView style={styles.setNameStyle}>
        <SafeAreaView style={styles.inputStyle}>
          <TextInput
            style={styles.inputTextStyle}
            onChangeText={setName}
            value={name}
            placeholder="Session"
            autoCorrect={false}
            autoCompleteType="off"
            autoCapitalize="none"
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.iconStyle}>
          <Entypo name="check" size={35} />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView>
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
            style={{ position: 'absolute', top: 40 }}
            data={times}
            keyExtractor={(time) => time}
            extraData={selected}
            numColumns={7}
            renderItem={() => (
              <TouchableOpacity
                style={styles.set}
              />
            )}
          />

        </SafeAreaView>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  setNameStyle: {
    flexDirection: 'row',
    backgroundColor: '#C3ECF8',
  },
  inputStyle: {
    marginTop: 8,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    width: 250,
    alignSelf: 'center',
    marginBottom: 8,
  },
  inputTextStyle: {
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  border: {
    marginTop: 5,
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
    height: 28,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  set: {
    height: 28,
    width: 50,
    borderWidth: 0.6,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 11,
  },

});

export default NewSessionScreen;
