import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import StartButton from '../components/StartButton';
import ProgressBar from '../components/ProgressBar';

const fakeGoal = [
  {
    goal: 'Study Calculus',
    expireTime: '2021/02/07',
    progress: 30,
  },
  {
    goal: 'Codewars',
    expireTime: '2021/02/08',
    progress: 35,
  },
  {
    goal: 'Exercise',
    expireTime: '2021/02/09',
    progress: 69,
  },
  {
    goal: 'Study Physics',
    expireTime: '2021/02/22',
    progress: 72,
  },
];

const GoalsScreen = ({ navigation }) => (
  <View>
    <FlatList
      data={fakeGoal}
      keyExtractor={(item) => item.goal}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {
            goal: item.goal,
            expireTime: item.expireTime,
            progress: item.progress,
            subGoal: item.subGoal,
          })}
        >
          <View style={styles.itemStyle}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.goalTextStyle}>{item.goal}</Text>
                <Text style={styles.expireTextStyle}>
                  {`Expire at ${item.expireTime}`}
                </Text>
              </View>
              <StartButton />
            </View>
            <ProgressBar progress={item.progress} />
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  itemStyle: {
    padding: 15,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  goalTextStyle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  expireTextStyle: {
    fontSize: 16,
    color: 'grey',
  },
  buttonStyle: {
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  iconStyle: {
    fontSize: 38,
  },
  startTextStyle: {
    fontSize: 10,
  },
});

export default GoalsScreen;
