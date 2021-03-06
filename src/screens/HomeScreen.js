import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const fakeData = [
  {title: 'Calculus'},
  {title: 'Codewars'},
  {title: 'Exercise'},
  {title: 'Walk the dog'},
  {title: 'Physics'}
]

const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.topTextStyle}>Upcoming Events</Text>
      <AntDesign
        name="clockcircleo"
        size={250}
        style={styles.clockStyle}
      />
      <FlatList //NOT SCROLLABLE!!!
        style={styles.listStyle}
        data={fakeData}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <Text style={styles.textStyle}>{item.title}</Text>}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 20
  },
  topTextStyle: {
    fontSize: 35,
    marginTop: 55,
    marginBottom: 25,
    alignSelf: 'center'
  },
  clockStyle: {
    alignSelf: 'center'
  },
  listStyle: {
    marginVertical: 50

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
    textAlignVertical: 'center'
  }
});

export default HomeScreen;