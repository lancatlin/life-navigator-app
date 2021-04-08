import React from 'react';
import {
  Text, View, StyleSheet, FlatList,
} from 'react-native';

const fakedata = [
  {
    "id": 1,
    "name": "Calculus",
    "goalId": 3,
    "startTime": Date(2021, 2, 2, 9, 0),
    "endTime": Date(2021, 2, 2, 11, 0),
  },
  {
    "id": 2,
    "name": 'Codewars',
    'goalId': 2,
    'startTime': Date(2021, 2, 2, 13, 0),
    'endTime': Date(2021, 2, 2, 15, 0)
  },
  {
    "id": 3,
    "name": 'Trigonmetry',
    'goalId': 3,
    'startTime': Date(2021, 2, 2, 15, 30),
    'endTime': Date(2021, 2, 2, 17, 30)
  },
  {
    "id": 4,
    "name": "Calculus",
    "goalId": 3,
    "startTime": Date(2021, 2, 3, 9, 0),
    "endTime": Date(2021, 2, 3, 11, 0),
  },
  {
    "id": 5,
    "name": 'Codewars',
    'goalId': 2,
    'startTime': Date(2021, 2, 3, 13, 0),
    'endTime': Date(2021, 2, 3, 15, 0)
  },
  {
    "id": 6,
    "name": 'Trigonmetry',
    'goalId': 3,
    'startTime': Date(2021, 2, 3, 15, 30),
    'endTime': Date(2021, 2, 3, 17, 30)
  },
  {
    "id": 7,
    "name": "Calculus",
    "goalId": 3,
    "startTime": Date(2021, 2, 4, 9, 0),
    "endTime": Date(2021, 2, 4, 11, 0),
  },
  {
    "id": 8,
    "name": 'Codewars',
    'goalId': 2,
    'startTime': Date(2021, 2, 4, 13, 0),
    'endTime': Date(2021, 2, 4, 15, 0)
  },
  {
    "id": 9,
    "name": 'Trigonmetry',
    'goalId': 3,
    'startTime': Date(2021, 2, 4, 15, 30),
    'endTime': Date(2021, 2, 4, 17, 30)
  },
];
const CalenderScreen = () => (
  <FlatList
    data={fakedata}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View>
        <Text> { item.name } </Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  
});

export default CalenderScreen;
