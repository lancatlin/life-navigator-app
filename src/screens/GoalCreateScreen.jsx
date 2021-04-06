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
        <View style={styles.view}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.ExpireText}> Expire at </Text>
          <Text style={styles.ExpireDate}>
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
        <View style={styles.view}>
          <Checkbox
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          <Text style={styles.DurationText}> Duartion </Text>
          <TextInput style={styles.DurationInput} />
          <Text style={styles.TimeText}> h</Text>
          <TextInput style={styles.DurationInput} />
          <Text style={styles.TimeText}> m</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.FrequencyText}> Frequency </Text>
          <TextInput style={styles.FrequencyInput} />
          <Text style={styles.FrequencyText}> / week</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.EachTime}> Each Time </Text>
          <TextInput style={styles.EachInput} />
          <Text style={styles.TimeText}> h</Text>
          <TextInput style={styles.EachInput} />
          <Text style={styles.TimeText}> m</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.PreferredText}> Preffered time </Text>
          <TextInput style={styles.PreferredInput} placeholder=" Choose time" />
        </View>
        <View style={styles.view7}>
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
    marginHorizontal: 15,
    alignSelf: 'center',
    fontSize: 18,
  },
  view: {
    margin: 15,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ExpireText: {
    fontSize: 20,
    flex: 0,
  },
  ExpireDate: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 120,
  },
  DurationText: {
    fontSize: 20,
    flex: 0,
  },
  DurationInput: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 50,
  },
  TimeText: {
    fontSize: 20,
    flex: 0,
  },
  view4: {
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  FrequencyText: {
    fontSize: 20,
    flex: 0,
  },
  FrequencyInput: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 70,
  },
  EachInput: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 60,
  },
  EachTime: {
    fontSize: 20,
    flex: 0,
  },
  PreferredText: {
    fontSize: 20,
    flex: 0,
  },
  PreferredInput: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 150,
  },
  view7: {
    margin: 100,
    width: 150,
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#EEFFFF',
    borderRadius: 15,
  },
  CreateTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default GoalCreateScreen;
