import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const CalenderScreen = () => {
    return(
        <View>
            <Text style={styles.text}> CalenderScreen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        top: 50
      }
})

export default CalenderScreen