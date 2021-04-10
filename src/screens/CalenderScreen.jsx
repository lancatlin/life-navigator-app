import React from 'react';
import {
  Text, View, StyleSheet, FlatList,
} from 'react-native';

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
    endTime: new Date(2021, 1, 2, 15, 0)
  },
  {
    id: 3,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 2, 15, 30),
    endTime: new Date(2021, 1, 2, 17, 30)
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
    endTime: new Date(2021, 1, 3, 15, 0)
  },
  {
    id: 6,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 3, 15, 30),
    endTime: new Date(2021, 1, 3, 17, 30)
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
    endTime: new Date(2021, 1, 4, 15, 0)
  },
  {
    id: 9,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 4, 15, 30),
    endTime: new Date(2021, 1, 4, 17, 30)
  },
];

const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function addZero(i) {
  if (i < 10){
    i = '0' + i;
  }
  return i;
};

const CalenderScreen = () => (
  <FlatList
    data={fakedata}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.Date_and_Schedule}>
        <View style={styles.Date}>
          <Text> { monthNames[ item.startTime.getMonth()] } </Text>
          <Text style={{fontSize:16}}> { item.startTime.getDate() } </Text>
        </View>
        <View style={styles.Schedule}>
          <View style={styles.Schedule_Name}>
            <Text style={{fontSize:16}}> { item.name } </Text>
          </View>
          <View style={styles.Schedule_Time}>
            <Text> { addZero(item.startTime.getHours()) }:{ addZero(item.startTime.getMinutes()) } - { addZero(item.endTime.getHours()) }:{ addZero(item.endTime.getMinutes()) } </Text>
          </View>
        </View>
      </View> 
    )}
  />
);

const styles = StyleSheet.create({
  Date_and_Schedule: {
    flexDirection: 'row',
    marginTop: 20,
  },
  Date: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    right: '20%'
  },
  Schedule: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    right: '5%',
    borderColor: 'rgb(236, 41, 192)',
    backgroundColor: 'pink',
    borderRadius: 15
  },
  Schedule_Name: {
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  Schedule_Time: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1
  }
});

export default CalenderScreen;
