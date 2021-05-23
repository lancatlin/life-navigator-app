import React, {useEffect} from 'react';
import {
  View, Text, StyleSheet, Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function trans_to_second(h, m) {
  return h * 60 + m;
}
const ExecuteScreen = () => {
  const [counter, setcounter] = React.useState(trans_to_second(1, 30));
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    counter > 0
    && setTimeout(() => {
      setcounter(counter - 1);
    }, 60000);
  }, [counter]);
  return (
    <View margin={100}>
      <View style={styles.view}>
        <Text style={styles.taskTitle}>Calculus</Text>
      </View>
      <View style={styles.padding}>
        <Text style={styles.clock}> {counter} </Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.text}>Schedule: </Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.text}>End Time: </Text>
      </View>
      <View style={styles.view2} textAlign="center" marginLeft={-70} justifyContent="space-around">
        <Button
          icon={(
            <Icon
              name="check-circle"
              size={20}
              color="white"
            />
          )}
          title="Done"
          flex={1}
        />
        <Button
          icon={(
            <Icon
              name="stop-circle"
              size={20}
              color="white"
            />
          )}
          title="Stop"
          width="20%"
          flex={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  padding: {
    flexDirection: 'row',
    width: 200,
    marginVertical: 30,
    marginStart: -10,
  },
  view: {
    flexDirection: 'row',
    width: 300,
    marginVertical: 10,
  },
  clock: {
    fontSize: 50,
    textAlign: 'center',
    flex: 0,
  },
  view1: {
    flexDirection: 'row',
    width: 160,
    height: 60,
    alignSelf: 'center',
    marginVertical: 20,
  },
  view2: {
    flexDirection: 'row',
    width: 300,
  },
  taskTitle: {
    fontSize: 40,
    textAlign: 'center',
    flex: 0,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    flex: 0,
  },
});

export default ExecuteScreen;
