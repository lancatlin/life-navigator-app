import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { DatePicker } from 'react-native-common-date-picker';

const GoalCreateScreen = (props) => (
  <View>
    <TextInput style={styles.NameInput} placeholder=" Name" />
    <View style={styles.view}>
      <Text style={styles.ParentText}> Parent Goal </Text>
      <TextInput style={styles.ParentInput} placeholder=" Choose Goal" />
    </View>
    <View style={styles.view2}>
      <AntDesign name="checksquare" size={24} color="blue" />
      <Text style={styles.ExpireText}> Expire at </Text>
      <TextInput
        style={styles.ExpireDate}
        placeholder=" Expire Date"
      />
    </View>
    <DatePicker
      confirm={(date) => {
        console.warn(date);
      }}
    />
    <View style={styles.view3}>
      <AntDesign name="checksquare" size={24} color="blue" />
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
    <View style={styles.view5}>
      <Text style={styles.EachTime}> Each Time </Text>
      <TextInput style={styles.EachInput} />
      <Text style={styles.TimeText}> h</Text>
      <TextInput style={styles.EachInput} />
      <Text style={styles.TimeText}> m</Text>
    </View>
    <View style={styles.view6}>
      <Text style={styles.PreferredText}> Prefferedtime </Text>
      <TextInput style={styles.PreferredInput} placeholder=" Choose time" />
    </View>
    <Button
      title="Parent Session"
      onPress={() => props.navigation.navigate('Parent Session')}
    />
    <View style={styles.view7}>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text style={styles.CreateTitle}> Create </Text>
      </TouchableOpacity>
    </View>
  </View>
);

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
    letterSpacing: 2,
  },
  view: {
    margin: 15,
    height: 40,
    marginHorizontal: 14,
    flexDirection: 'row',
    width: 300,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  ParentText: {
    fontSize: 20,
    flex: 0,
  },
  ParentInput: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 100,
    flex: 1,
    letterSpacing: 2,
  },
  view2: {
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
    width: 170,
    letterSpacing: 2,
  },
  view3: {
    margin: 15,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    letterSpacing: 2,
  },
  TimeText: {
    fontSize: 20,
    flex: 0,
  },
  view4: {
    margin: 15,
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
    letterSpacing: 2,
  },
  view5: {
    margin: 15,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  EachInput: {
    borderColor: 'black',
    borderWidth: 1.8,
    height: 30,
    width: 60,
    letterSpacing: 2,
  },
  EachTime: {
    fontSize: 20,
    flex: 0,
  },
  view6: {
    margin: 15,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    letterSpacing: 2,
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
