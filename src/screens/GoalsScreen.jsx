import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import { useQuery } from 'react-query';
import { Checkbox } from 'react-native-paper';
import { fetchGoalList } from '../api/GoalsFetch';
import StartButton from '../components/StartButton';
import ProgressBar from '../components/ProgressBar';

const GoalsScreen = () => {
  const {
    isLoading, isError, error, data,
  } = useQuery('goals', fetchGoalList);
  if (isLoading) {
    return <><Text>Loading...</Text></>;
  }
  if (isError) {
    throw error;
  }
  console.log(data);

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
                <Text>{`Duration: ${goal.duration}`}</Text>
                <Text>{`Frequency: ${goal.frequency}`}</Text>
                <Text>{`Each Time: ${goal.eachTime}`}</Text>
                <Text>{`Executed Time: ${goal.executedTime}`}</Text>
                <Text>{`Session id: ${goal.sessionId}`}</Text>
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
        keyExtractor={(item) => item.id}
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
});

export default GoalsScreen;
