import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import { Foundation } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const GoalCreateScreen = () => {
  const [hasExpired, setHasChecked] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const [chosenDate, setChosenDate] = React.useState('');
  const showDatePicker = () => {
    setIsVisible(true);
  };
  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setChosenDate(moment(date).format('L'));
  };
  return (
    <ScrollView>
      <View>
        <Input placeholder=" Name" />
        <View style={styles.view} justifyContent="space-between">
          <CheckBox
            title="Expire at"
            checked={hasExpired}
            onPress={() => {
              setHasChecked(!hasExpired);
            }}
          />
          { hasExpired
            ? (
              <>
                <TouchableOpacity
                  onPress={showDatePicker}
                  style={{ flexDirection: 'row' }}
                  disabled={!hasExpired}
                >
                  <Foundation name="calendar" size={35} color="black" style={{ paddingRight: 5 }} />
                  <Text style={styles.expireDate} width={120}>
                    {chosenDate}
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isVisible}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </>
            )
            : null}

        </View>
        <View style={styles.view} justifyContent="space-between">
          <CheckBox
            title="Duartion"
            checked={checked2}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          {
            checked2
              ? (
                <>
                  <TextInput style={styles.input} width={50} />
                  <Text style={styles.text}> h</Text>
                  <TextInput style={styles.input} width={50} />
                  <Text style={styles.text}> m</Text>
                </>
              )
              : null
          }
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
          <Text style={styles.text}> Session </Text>
          <TextInput style={styles.input} width={150} placeholder=" Choose time" />
        </View>
        <View style={styles.view} margin={100} alignItems="center" backgroundColor="#00ffff" borderRadius={15} width={110} height={50}>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Text style={styles.createTitle}> Create </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameInput: {
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
    marginBottom: 5,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    flex: 0,
  },
  expireDate: {
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
  createTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default GoalCreateScreen;
