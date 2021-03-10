import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AuthScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Auth Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    top: 50
  }
})

export default AuthScreen
