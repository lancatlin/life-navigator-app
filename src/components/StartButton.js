import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const StartButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Ionicons name="rocket-outline" style={styles.iconStyle} />
        <Text style={styles.startTextStyle}>Start now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'flex-end',
  },
  iconStyle: {
    fontSize: 38,
  },
  startTextStyle: {
    fontSize: 10,
  },
})

export default StartButton
