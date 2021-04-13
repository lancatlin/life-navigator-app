import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { AntDesign } from '@expo/vector-icons';

const fakeTask = [
  {
    task: 'Calculus',
    schedule: '1h30m',
  },
];
function ExecuteScreen() {
  return (
    <View margin={150}>
      <View style={styles.view}>
        <Text style={styles.taskTitle}>Calculus</Text>
      </View>
      <View style={styles.padding}>
        <CountDown
          size={40}
          until={10}
          onFinish={() => alert('Finished')}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{ m: null, s: null }}
          showSeparator
          flex={1}
        />
      </View>
      <View style={styles.view1}>
        <Text style={styles.text}>Schedule: </Text>
        <Text style={styles.input} />
      </View>
      <View style={styles.view1}>
        <Text style={styles.text}>End Time: </Text>
        <Text style={styles.input} />
      </View>
      <View style={styles.view2} borderRadius={15}>
        <AntDesign name="checkcircle" size={28} color="black" alignSelf="center" flex={1} />
        <Text style={styles.button}>Done</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 120,
    width: 320,
    margin: 40,
  },
  view: {
    flexDirection: 'row',
    width: 160,
    height: 60,
    alignSelf: 'center',
  },
  view1: {
    flexDirection: 'row',
    width: 160,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  view2: {
    flexDirection: 'row',
    width: 120,
    height: 50,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1.8,
  },
  taskTitle: {
    fontSize: 40,
    alignSelf: 'center',
    flex: 0,
  },
  text: {
    fontSize: 25,
    alignSelf: 'center',
    flex: 0,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    fontSize: 30,
  },
});

export default ExecuteScreen;
