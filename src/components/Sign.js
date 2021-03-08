import React from 'react'
import { Text, Input } from 'react-native-elements'
import { View, TouchableOpacity,  StyleSheet } from 'react-native'
import Spacer from './Spacer'

const Sign = ({ ButtonText }) => {
    return (
        <View style={styles.border}>
            <Spacer>
                <Text h3 style={styles.header}>{title}</Text>
            </Spacer>
            <Input label='Email' />
            <Input label='Password' />
            <Spacer>
                <TouchableOpacity style={styles.Button1}>
                    <Text>{ButtonText}</Text>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity style={styles.Button2}>
                    <Text>Google Login</Text>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity style={styles.Button3}>
                    <Text>Facebook Login</Text>
                </TouchableOpacity>
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
        height: 100,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'black'
    },
    Button2: {
        fontSize: 10,
        height: 100,
        backgroundColor: 'crimson',
        borderRadius: 4,
        borderColor: 'darkred'
    },
    Button3: {
        fontSize: 10,
        height: 100,
        backgroundColor: 'cyan',
        borderRadius: 4,
        borderColor: 'darkblue'
    },
    
})

export default Sign