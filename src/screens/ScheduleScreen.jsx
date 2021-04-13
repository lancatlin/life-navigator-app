import React from 'react';
import {
  FlatList,
} from 'react-native';
import ScheduleDetail from '../components/ScheduleDetail';

const fakedata = [
  {
    id: 1,
    name: 'Calculus',
    goalId: 3,
    startTime: new Date(2021, 1, 2, 9, 0),
    endTime: new Date(2021, 1, 2, 11, 0),
  },
  {
    id: 2,
    name: 'Codewars',
    goalId: 2,
    startTime: new Date(2021, 1, 2, 13, 0),
    endTime: new Date(2021, 1, 2, 15, 0),
  },
  {
    id: 3,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 2, 15, 30),
    endTime: new Date(2021, 1, 2, 17, 30),
  },
  {
    id: 4,
    name: 'Calculus',
    goalId: 3,
    startTime: new Date(2021, 1, 3, 9, 0),
    endTime: new Date(2021, 1, 3, 11, 0),
  },
  {
    id: 5,
    name: 'Codewars',
    goalId: 2,
    startTime: new Date(2021, 1, 3, 13, 0),
    endTime: new Date(2021, 1, 3, 15, 0),
  },
  {
    id: 6,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 3, 15, 30),
    endTime: new Date(2021, 1, 3, 17, 30),
  },
  {
    id: 7,
    name: 'Calculus',
    goalId: 3,
    startTime: new Date(2021, 1, 4, 9, 0),
    endTime: new Date(2021, 1, 4, 11, 0),
  },
  {
    id: 8,
    name: 'Codewars',
    goalId: 2,
    startTime: new Date(2021, 1, 4, 13, 0),
    endTime: new Date(2021, 1, 4, 15, 0),
  },
  {
    id: 9,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 4, 15, 30),
    endTime: new Date(2021, 1, 4, 17, 30),
  },
];

const ScheduleScreen = () => (
  <FlatList
    data={fakedata}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <ScheduleDetail
        task={item}
      />
    )}
  />
);

export default ScheduleScreen;
