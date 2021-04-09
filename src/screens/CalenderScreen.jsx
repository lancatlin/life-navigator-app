import React from 'react';
import {
  Text, View, StyleSheet, FlatList,
} from 'react-native';

const fakedata = [
  {
    date: 'Tue',
    day: '2',
    schedule: ['Calculus', 'Codewars', 'Trigonmetry'],
  },
  {
    date: 'Wed',
    day: '3',
    schedule: ['Calculus', 'Codewars', 'Trigonmetry'],
  },
  {
    date: 'Thu',
    day: '4',
    schedule: ['Calculus', 'Codewars', 'Trigonmetry'],
    time: ['9:00 - 11: 00', '13:00 - 15:00', '15:30 - 17:30'],
  },
];
const CalenderScreen = () => (
  <FlatList
    data={fakedata}
    keyExtractor={(item) => item.date}
    renderItem={({ item }) => (
      <View style={styles.drawer}>
        <View style={styles.dateDrawer}>
          <Text style={styles.day}>{item.date}</Text>
          <Text style={styles.date}>{item.day}</Text>
        </View>
        <FlatList
          data={item.schedule}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.scheduleDrawer}>
              <Text style={styles.Text}>{item}</Text>
              <View style={styles.timeView}>
                <Text style={styles.Text}>time</Text>
              </View>
            </View>
          )}
        />
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  drawer: {
    flexDirection: 'row',
  },
  dateDrawer: {
    left: 20,
    alignItems: 'center',
    width: '10%',
  },
  date: {
    fontSize: 20,
  },
  day: {
    fontSize: 17,
  },
  scheduleDrawer: {
    left: 35,
    backgroundColor: 'pink',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
  },
  Text: {
    fontSize: 17,
    marginHorizontal: 5,
  },
  timeView: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default CalenderScreen;
