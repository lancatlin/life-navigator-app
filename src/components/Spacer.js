import React from 'react'
import { View, StyleSheet } from 'react-native'

const Spacer = ({ children }) => {
    return (
        <View style = {styles.SpacerStyle}>{children}</View>
    )
}

const styles = StyleSheet.create({
    SpacerStyle: {
        margin: 5
    }
})

export default Spacer