import React from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import { AntDesign } from 'react-native-vector-icons';

const fakeData = [
  { title: 'Calculus' },
  { title: 'Codewars' },
  { title: 'Exercise' },
  { title: 'Walk the dog' },
  { title: 'Physics' },
];

const HomeScreen = () => (
  <>
    <View>
      <Text style={styles.topTextStyle}>Upcoming Events</Text>
      <AntDesign name="clockcircleo" style={styles.clockStyle} />
    </View>
    <FlatList
      style={styles.listStyle}
      data={fakeData}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>{item.title}</Text>
      )}
    />
  </>
);

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 35,
    marginTop: 55,
    marginBottom: 25,
    alignSelf: 'center',
  },
  clockStyle: {
    alignSelf: 'center',
    fontSize: 200,
  },
  listStyle: {
    marginTop: 50,
    margin: 20,
  },
  textStyle: {
    backgroundColor: 'rgba(145, 190, 240, 0.3)',
    borderColor: 'rgba(145, 190, 240, 1.0)',
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 25,
    height: 60,
    margin: 30,
    marginVertical: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default HomeScreen;
