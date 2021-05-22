import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import ScheduleDetail from '../components/ScheduleDetail';
import useSchedule from '../hooks/useSchedule';

const ScheduleScreen = () => {
  const { tasks, isLoading, reload } = useSchedule();
  console.log(tasks);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <Button
        title="Reload"
        onPress={reload}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ScheduleDetail
            task={item}
          />
        )}
      />
    </View>
  );
};

export default ScheduleScreen;
