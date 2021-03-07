import React from 'react'
import { Text, Input } from 'react-native-elements'
import { View, TouchableOpacity,  StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Sign = ({ title, ButtonText }) => {
    return (
        <View style={styles.border}>
            <Spacer>
                <Text h3 style={styles.header}>{title}</Text>
            </Spacer>
            <Input label='Email' />
            <Input label='Password' />
            <Spacer>
                <TouchableOpacity 
                    title={ButtonText}
                    style={styles.Button1} 
                />
            </Spacer>
            <Spacer>
                <TouchableOpacity 
                    title='Google Login' 
                    style={styles.Button2}
                />
            </Spacer>
            <Spacer>
                <TouchableOpacity 
                    title='Facebook Login'
                    style={styles.Button3} 
                />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        marginTop: 20
    },
    header: {
        marginBottom: 10
    },
    Button1: {
        fontSize: 20,
        width: 30,
        height: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'black'
    },
    Button2: {
        fontSize: 10,
        width: 30,
        height: 10,
        backgroundColor: 'crimson',
        borderRadius: 4,
        borderColor: 'darkred'
    },
    Button3: {
        fontSize: 10,
        width: 30,
        height: 10,
        backgroundColor: 'cyan',
        borderRadius: 4,
        borderColor: 'darkblue'
    },
    
})

export default Sign