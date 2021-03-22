import React from 'react';
import {
  Text, View, StyleSheet, FlatList, 
} from 'react-native';

const CalenderScreen = () => (
  <View style={styles.drawer}>
    <View style={styles.dateDrawer}>
      <Text style={styles.day}>Tue</Text>
      <Text style={styles.date}>2</Text>
    </View>
    <View style={styles.scheduleDrawer}>
     <FlatList
        data={[
          {key: ['Calculus', '9:00-11:00']},
          {key: ['Codewars', '13:00-15:00']},
          {key: ['Trigonmetry', '15:30-17:30']}
        ]}
        renderItem={({item}) => 
          <View style={styles.schedule}>
            <View style={styles.scheduleView}>
              <Text style={styles.Text}>{item.key[0]}</Text>
            </View>
            <View style={styles.timeView}>
              <Text style={styles.Text}> {item.key[1]} </Text>
            </View>
          </View>
        }
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  drawer:{
    flexDirection: 'row',
    flex: 1
  },
  dateDrawer:{
    left: 30,
    alignItems: 'center'
  },
  date:{
    fontSize: 20
  },
  day:{
    fontSize: 17
  },
  scheduleDrawer:{
    left: 45,
    flex: 0.85
  },
  schedule:{
    backgroundColor: 'pink',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
    margin: 10,
    height: 45, 
    alignItems: 'center',
    flexDirection: 'row'
  },
  Text:{
    fontSize: 17,
  },
  timeView:{
    alignItems: 'flex-end',
    flex: 1
  }
});

export default CalenderScreen;
