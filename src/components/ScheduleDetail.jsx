import React, { useState } from 'react';
import {
  View, Text, Modal, StyleSheet, TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import ErrorBoundary from 'react-native-error-boundary';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getMonth(date) {
  return monthNames[date.getMonth()];
}

function ScheduleDetail({ task }) {
  const [open, setOpen] = useState(false);
  return (
    <ErrorBoundary>
      <View>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <View style={styles.dateAndSchedule}>
            <View style={styles.date}>
              <Text style={{ color: 'black' }}>{ getMonth(task.startTime) }</Text>
              <Text style={{ fontSize: 16 }}>
                { task.startTime.getDate() }
              </Text>
            </View>
            <View style={styles.schedule}>
              <View style={styles.scheduleName}>
                <Text style={{ fontSize: 16 }}>
                  { task.name }
                </Text>
              </View>
              <View style={styles.scheduleTime}>
                <Text>
                  { moment(task.startTime).format('H:mm') }
                  -
                  { moment(task.endTime).format('H:mm') }
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
    </ErrorBoundary>
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
        <View style={styles.modalText}>
          <View style={{ margin: 25 }}>
            <View style={styles.taskTitle}>
              <Text style={{ fontSize: 25 }}>{task.name}</Text>
            </View>
            <Text style={{ fontSize: 16 }}>
              Time:
              {moment(task.startTime).format('H:mm')}
              {' '}
              -
              {moment(task.endTime).format('H:mm')}
            </Text>
            <Text style={{ fontSize: 16 }}>Note:</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalText: {
    backgroundColor: 'white',
    height: 800,
    width: 325,
  },
  dateAndSchedule: {
    flexDirection: 'row',
    marginTop: 20,
  },
  date: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    right: '20%',
  },
  schedule: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    right: '5%',
    borderColor: 'rgb(236, 41, 192)',
    backgroundColor: 'pink',
    borderRadius: 15,
  },
  scheduleName: {
    alignContent: 'flex-start',
    flexDirection: 'row',
    left: 10,
  },
  scheduleTime: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    right: 10,
  },
  taskTitle: {
    alignItems: 'center',
    bottom: 10,
  },
});

export default ScheduleDetail;
