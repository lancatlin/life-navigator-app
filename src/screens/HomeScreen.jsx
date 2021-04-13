import React from 'react';
import {
  Text, StyleSheet, FlatList, Dimensions,
} from 'react-native';
import { AntDesign } from 'react-native-vector-icons';

const fakeData = [
  { title: 'Calculus' },
  { title: 'Codewars' },
  { title: 'Exercise' },
  { title: 'Walk the dog' },
  { title: 'Physics' },
];

const SCREEN_HEIGHT = Dimensions.get('window').height;

const HomeScreen = () => (
  <FlatList
    ListHeaderComponent={(
      <>
        <Text style={styles.topTextStyle}>Upcoming Events</Text>
        <AntDesign name="clockcircleo" style={styles.clockStyle} size={SCREEN_HEIGHT * 0.3} />
      </>
  )}
    style={styles.listStyle}
    data={fakeData}
    keyExtractor={(item) => item.title}
    renderItem={({ item }) => (
      <Text style={styles.textStyle}>{item.title}</Text>
    )}
    showsVerticalScrollIndicator={false}
  />
);

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 35,
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'center',
  },
  clockStyle: {
    alignSelf: 'center',
    marginBottom: 30,
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
