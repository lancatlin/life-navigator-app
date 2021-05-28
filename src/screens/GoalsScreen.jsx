import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { useGoals } from '../api/GoalsFetch';
import StartButton from '../components/StartButton';
import ProgressBar from '../components/ProgressBar';

const GoalsScreen = () => {
  const {
    isLoading, isError, error, data,
  } = useGoals();
  if (isLoading) {
    return <><Text>Loading...</Text></>;
  }
  if (isError) {
    throw error;
  }

  const ExpendComponent = ({ goal }) => {
    const [isExpending, setisExpending] = useState(false);
    const [expend, setexpend] = useState(false);

    const onClick = () => {
      setexpend(!isExpending);
      setisExpending(!expend);
    };

    return (
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={expend ? 1 : null}
      >
        <View style={styles.itemStyle}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text h2>{goal.name}</Text>
              <Text style={styles.expireTextStyle}>
                {`Expire at ${goal.expireAt}`}
              </Text>
            </View>
            <StartButton />
          </View>
          <ProgressBar progress={Math.round(goal.progress())} />
          {expend
            ? (
              <>
                <View style={styles.textShowContainer}>
                  <Text style={styles.textStyle}>Duration</Text>
                  <Text style={styles.numberStyle}>{goal.duration}</Text>
                </View>
                <View style={styles.textShowContainer}>
                  <Text style={styles.textStyle}>Frequency</Text>
                  <Text style={styles.numberStyle}>{goal.frequency}</Text>
                </View>
                <View style={styles.textShowContainer}>
                  <Text style={styles.textStyle}>Each Time</Text>
                  <Text style={styles.numberStyle}>{goal.eachTime}</Text>
                </View>
                <View style={styles.textShowContainer}>
                  <Text style={styles.textStyle}>Executed Time</Text>
                  <Text style={styles.numberStyle}>{goal.executedTime}</Text>
                </View>
                <View style={styles.textShowContainer}>
                  <Text style={styles.textStyle}>Session id</Text>
                  <Text style={styles.numberStyle}>{goal.sessionId}</Text>
                </View>
              </>
            )
            : null}
        </View>
        {expend
          ? (
            <View style={styles.itemStyle}>
              <Text h3>Sub Goals</Text>
              <FlatList
                data={goal.subGoals}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox
                      status={item.completed ? 'checked' : 'unchecked'}
                      color="blue"
                    />
                    <Text>{item.name}</Text>
                  </View>
                )}
              />
            </View>
          )
          : null}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ExpendComponent goal={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 15,
    borderColor: 'black',
    borderBottomWidth: 1,
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
  textShowContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
  },
  numberStyle: {
    paddingHorizontal: 30,
    textAlign: 'center',
    width: 90,
    borderBottomWidth: 1,
    fontSize: 20,
  },
});

export default GoalsScreen;
