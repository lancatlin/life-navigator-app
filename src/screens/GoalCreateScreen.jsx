import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Foundation } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const GoalCreateScreen = (props) => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [isVisable, setisVisable] = React.useState(false);
  const [chosenDate, setchosenDate] = React.useState('');
  const showDatePicker = () => {
    setisVisable(true);
  };
  const hideDatePicker = () => {
    setisVisable(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setchosenDate(moment(date).format('L'));
  };
  return (
    <ScrollView>
      <View>
        <TextInput style={styles.NameInput} placeholder=" Name" />
        <View style={styles.view} justifyContent="space-between">
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.text}> Expire at </Text>
          <Text style={styles.Expiredate} width={120}>
            {chosenDate}
          </Text>
          <TouchableOpacity onPress={showDatePicker}>
            <Foundation name="calendar" size={35} color="black" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isVisable}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View style={styles.view} justifyContent="space-between">
          <Checkbox
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          <Text style={styles.text}> Duartion </Text>
          <TextInput style={styles.input} width={50} />
          <Text style={styles.text}> h</Text>
          <TextInput style={styles.input} width={50} />
          <Text style={styles.text}> m</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Frequency </Text>
          <TextInput style={styles.input} width={70} />
          <Text style={styles.text}> / week</Text>
        </View>
        <View style={styles.view} justifyContent="space-between">
          <Text style={styles.text}> Each Time </Text>
          <TextInput style={styles.input} width={60} />
          <Text style={styles.text}> h</Text>
          <TextInput style={styles.input} width={60} />
          <Text style={styles.text}> m</Text>
        </View>
        <View style={styles.view} justifyContent="space-between">
          <Text style={styles.text}> Preffered time </Text>
          <TextInput style={styles.input} width={150} placeholder=" Choose time" />
        </View>
        <View style={styles.view} margin={100} alignItems="center" backgroundColor="#00ffff" borderRadius={15} width={110} height={50}>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Text style={styles.CreateTitle}> Create </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  NameInput: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1.8,
    height: 40,
    width: 300,
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 18,
  },
  view: {
    margin: 15,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    flex: 0,
  },
  Expiredate: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 120,
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
  },
  CreateTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default GoalCreateScreen;
