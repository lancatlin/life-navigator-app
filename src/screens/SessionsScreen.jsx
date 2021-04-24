import React from 'react';
import { Text } from 'react-native-elements';
import {
  View, TouchableOpacity, StyleSheet, FlatList,
} from 'react-native';
import { useQuery } from 'react-query';
import Spacer from '../components/Spacer';
import { fetchSessions } from '../api/SessionsFetch';

const SessionsScreen = ({ navigation }) => {
  const {
    isLoading, isError, data, error,
  } = useQuery('fetchSessions', fetchSessions);
  if (isLoading) {
    return <></>;
  }
  if (isError) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.border}>
      <FlatList
        data={data}
        keyExtractor={((item) => item.name)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.TimeButton}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Spacer>
        <TouchableOpacity style={styles.NewButton} onPress={() => navigation.navigate('NewSession')}>
          <Text>New</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    marginTop: 40,
    flex: 1,
  },
  TimeButton: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  NewButton: {
    bottom: 50,
    height: 50,
    width: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default SessionsScreen;
