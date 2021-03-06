import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const GoalCreateScreen = (props) => {
  return (
    <View>
      <Text>GoalCreateScreen</Text>
      <Button
        title="session"
        onPress={() => props.navigation.navigate('Create Session')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GoalCreateScreen;
