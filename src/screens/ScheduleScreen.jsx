import React from 'react';
import { FlatList, Text } from 'react-native';
import ScheduleDetail from '../components/ScheduleDetail';
import useSchedule from '../hooks/useSchedule';

const ScheduleScreen = () => {
  const tasks = useSchedule();
  console.log(tasks);
  if (tasks.length === 0) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ScheduleDetail
          task={item}
        />
      )}
    />
  );
};

export default ScheduleScreen;
