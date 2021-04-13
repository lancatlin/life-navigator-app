import React, { useState, useEffect } from 'react';
import {
  View, Text, Modal, StyleSheet,
} from 'react-native';

const fakedata = [
  {
    id: 1,
    name: 'Calculus',
    goalId: 3,
    startTime: new Date(2021, 1, 2, 9, 0),
    endTime: new Date(2021, 1, 2, 11, 0),
  },
  {
    id: 2,
    name: 'Codewars',
    goalId: 2,
    startTime: new Date(2021, 1, 2, 13, 0),
    endTime: new Date(2021, 1, 2, 15, 0),
  },
  {
    id: 3,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 2, 15, 30),
    endTime: new Date(2021, 1, 2, 17, 30),
  },
  {
    id: 4,
    name: 'Calculus',
    goalId: 3,
    startTime: new Date(2021, 1, 3, 9, 0),
    endTime: new Date(2021, 1, 3, 11, 0),
  },
  {
    id: 5,
    name: 'Codewars',
    goalId: 2,
    startTime: new Date(2021, 1, 3, 13, 0),
    endTime: new Date(2021, 1, 3, 15, 0),
  },
  {
    id: 6,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 3, 15, 30),
    endTime: new Date(2021, 1, 3, 17, 30),
  },
  {
    id: 7,
    name: 'Calculus',
    goalId: 3,
    startTime: new Date(2021, 1, 4, 9, 0),
    endTime: new Date(2021, 1, 4, 11, 0),
  },
  {
    id: 8,
    name: 'Codewars',
    goalId: 2,
    startTime: new Date(2021, 1, 4, 13, 0),
    endTime: new Date(2021, 1, 4, 15, 0),
  },
  {
    id: 9,
    name: 'Trigonmetry',
    goalId: 3,
    startTime: new Date(2021, 1, 4, 15, 30),
    endTime: new Date(2021, 1, 4, 17, 30),
  },
];

function ModalOpen(id) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    for (let i = 0; i < fakedata.length; i += 1) {
      if (fakedata[i].id === id) {
        setOpen(true);
        return (
          <Modal
            visible={open}
            transparent
            onRequestClose={setOpen(false)}
            animationType="fade"
          >
            <View style={styles.modal}>
              <View>
                <Text> hi </Text>
              </View>
            </View>
          </Modal>
        );
      }
    }
  });
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export { ModalOpen, fakedata };
