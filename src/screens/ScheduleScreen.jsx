import React from 'react';
import { FlatList, Text } from 'react-native';
import ScheduleDetail from '../components/ScheduleDetail';
import useSchedule from '../hooks/useSchedule';

const ScheduleScreen = () => {
  const { tasks, isLoading } = useSchedule();
  console.log(tasks);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ScheduleDetail
          task={item}
        />
      )}
    />
  );
};

export default ScheduleScreen;
