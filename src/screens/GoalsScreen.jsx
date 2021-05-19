import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import { useQuery } from 'react-query';
import { fetchGoalList } from '../api/GoalsFetch';
import StartButton from '../components/StartButton';
import ProgressBar from '../components/ProgressBar';

const GoalsScreen = ({ navigation }) => {
  const {
    isLoading, isError, error, data,
  } = useQuery('goals', fetchGoalList);
  if (isLoading) {
    return <><Text>Loading...</Text></>;
  }
  if (isError) {
    console.log(error);
  }
  console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('GoalDetail', { id: item.id })}
          >
            <View style={styles.itemStyle}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text h3>{item.name}</Text>
                  <Text style={styles.expireTextStyle}>
                    {`Expire at ${item.expireAt}`}
                  </Text>
                </View>
                <StartButton />
              </View>
              <ProgressBar progress={item.progress()} />
            </View>
          </TouchableOpacity>
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
