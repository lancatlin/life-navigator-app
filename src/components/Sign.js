import React from 'react'
import { Text, Input } from 'react-native-elements'
import { View, TouchableOpacity,  StyleSheet } from 'react-native'
import Spacer from './Spacer'

const Sign = ({ title, ButtonText }) => {
    return (
        <View style={styles.border}>
            <Spacer>
                <Text h3 style={styles.header}>{title}</Text>
            </Spacer>
            <Input label='Email' />
            <Input label='Password' />
            <Spacer>
                <TouchableOpacity style={styles.Button1}>
                    <Text style={styles.Text1}>{ButtonText}</Text>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity style={styles.Button2}><Text style={styles.Text2}>Google Login</Text>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity style={styles.Button3}>
                    <Text style={styles.Text2}>Facebook Login</Text>
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
        width: 200,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,

        alignItems: 'center',
        alignSelf: 'center'
    },
    Button2: {
        width: 200,
        height: 50,
        backgroundColor: '#F1A8A8',
        borderRadius: 10,
        borderColor: 'darkred',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Button3: {
        width: 200,
        height: 50,
        backgroundColor: '#C3ECF8',
        borderRadius: 10,
        borderColor: 'darkblue',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Text1: {
        fontSize: 23,
    },
    Text2: {
        fontSize: 15,
    }
})

export default Sign