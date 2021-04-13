import React, { useState } from 'react';
import {
  View, Text, Modal, StyleSheet, TouchableOpacity,
} from 'react-native';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getMonth(date) {
  return monthNames[date.getMonth()];
}

function ScheduleDetail({ task }) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.dateAndSchedule}>
          <View style={styles.Date}>
            <Text style={{ color: 'black' }}>{ getMonth(task.startTime) }</Text>
            <Text style={{ fontSize: 16 }}>
              { task.startTime.getDate() }
            </Text>
          </View>
          <View style={styles.Schedule}>
            <View style={styles.Schedule_Name}>
              <Text style={{ fontSize: 16 }}>
                { task.name }
              </Text>
            </View>
            <View style={styles.Schedule_Time}>
              <Text>
                { task.startTime.toLocaleTimeString() }
                -
                { task.endTime.toLocaleTimeString() }
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TaskModal
        task={task}
        open={open}
        callback={() => setOpen(false)}
      />
    </View>
  );
}

function TaskModal({ task, open, callback }) {
  return (
    <Modal
      visible={open}
      transparent
      onRequestClose={callback}
      animationType="fade"
    >
      <View style={styles.modal}>
        <View>
          <Text>{task.name}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  Date_and_Schedule: {
    flexDirection: 'row',
    marginTop: 20,
  },
  Date: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    right: '20%',
  },
  Schedule: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    right: '5%',
    borderColor: 'rgb(236, 41, 192)',
    backgroundColor: 'pink',
    borderRadius: 15,
  },
  Schedule_Name: {
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  Schedule_Time: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
});

export default ScheduleDetail;
