import React from 'react';
import {
  Text, View, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { ModalOpen, fakedata } from '../components/CalenderDetail';


const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function addZero(i) {
  if (i < 10){
    i = '0' + i;
  }
  return i;
};

const CalenderScreen = () => {
  return(
    <FlatList
      data={fakedata}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => ModalOpen(1) }>
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
        </TouchableOpacity>
      )}
    />
  )
};

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
  },
});

export default CalenderScreen;
