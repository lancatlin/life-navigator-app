import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { CardStyleInterpolators } from '@react-navigation/stack';
function sessionScreen() {
  return (
    <View>
      <TextInput style={styles.NameInput} placeholder=" Name" />
      <View style={styles.back}>
        <Text style={styles.ParentText}> Parent Goal </Text>
        <TextInput style={styles.ParentInput} placeholder=" Choose Goal" />
      </View>
      <View style={styles.back2}>
        <AntDesign name="checksquare" size={24} color="blue"></AntDesign>
        <Text style={styles.ExpireText}> Expire at </Text>
        <TextInput
          style={styles.ExpireDate}
          placeholder=" Expire Date"
        ></TextInput>
      </View>
      <View style={styles.back3}>
        <AntDesign name="checksquare" size={24} color="blue"></AntDesign>
        <Text style={styles.DurationText}> Duartion </Text>
        <TextInput style={styles.DurationInput} />
        <Text style={styles.TimeText}> h</Text>
        <TextInput style={styles.DurationInput} />
        <Text style={styles.TimeText}> m</Text>
      </View>
      <View style={styles.back4}>
        <Text style={styles.FrequencyText}> Frequency </Text>
        <TextInput style={styles.FrequencyInput} />
        <Text style={styles.FrequencyText}> / week</Text>
      </View>
      <View style={styles.back5}>
        <Text style={styles.EachTime}> Each Time </Text>
        <TextInput style={styles.EachInput}></TextInput>
        <Text style={styles.TimeText}> h</Text>
        <TextInput style={styles.EachInput}></TextInput>
        <Text style={styles.TimeText}> m</Text>
      </View>
      <View style={styles.back6}>
        <Text style={styles.PreferredText}> Prefferedtime </Text>
        <TextInput style={styles.PreferredInput} placeholder="Choose time" />
      </View>
      <View style={styles.back7}>
        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Text style={styles.CreateTitle}> Create </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  back: {
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
  },
  back2: {
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
  },
  back3: {
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
  },
  TimeText: {
    fontSize: 20,
    flex: 0,
  },
  back4: {
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
  back5: {
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
  },
  EachTime: {
    fontSize: 20,
    flex: 0,
  },
  back6: {
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
  },
  back7: {
    width: 100,
    alignSelf: 'center',
    backgroundColor: '#EEFFFF',
    borderRadius: 15,
  },
  CreateTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default sessionScreen;
