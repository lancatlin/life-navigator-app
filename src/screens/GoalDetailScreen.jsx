import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import StartButton from '../components/StartButton';
import ProgressBar from '../components/ProgressBar';

const GoalDetailScreen = ({ route }) => (
  <>
    <View style={styles.containerStyle}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.expireTextStyle}>
          {`Expire at ${route.params.expireTime}`}
        </Text>
        <StartButton />
      </View>
      <ProgressBar progress={route.params.progress} />
      <View style={styles.timeSetContainerStyle}>
        <Text style={styles.timeSetTextStyle}>Elapsed Time</Text>
        <TextInput style={styles.textInputStyle} autoCapitalize="none" autoCorrect={false} />
      </View>
      <View style={styles.timeSetContainerStyle}>
        <Text style={styles.timeSetTextStyle}>Remaining Time</Text>
        <TextInput style={styles.textInputStyle} autoCapitalize="none" autoCorrect={false} />
      </View>
    </View>
    <View>
      <Text style={styles.subStyle}>Sub Goals</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  expireTextStyle: {
    flex: 1,
    fontSize: 16,
    color: 'grey',
    textAlignVertical: 'center',
  },
  timeSetContainerStyle: {
    flexDirection: 'row',
    marginVertical: 25,
    marginHorizontal: 15,
  },
  timeSetTextStyle: {
    fontSize: 20,
    flex: 1,
  },
  textInputStyle: {
    width: 150,
    fontSize: 20,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  subStyle: {
    marginTop: 20,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});

export default GoalDetailScreen;
