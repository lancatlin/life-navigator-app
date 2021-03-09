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
                <TouchableOpacity>
                    <View style={styles.Button1}>
                        <Text style={styles.Text1}>{ButtonText}</Text>
                    </View>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity>
                    <View style={styles.Button2}>
                        <Text style={styles.Text2}>Google Login</Text>
                    </View>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity >
                    <View style={styles.Button3}>
                        <Text style={styles.Text2}>Facebook Login</Text>
                    </View>
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
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Button2: {
        width: 200,
        height: 50,
        backgroundColor: 'crimson',
        borderRadius: 4,
        borderColor: 'darkred',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Button3: {
        height: 50,
        backgroundColor: 'cyan',
        borderRadius: 4,
        borderColor: 'darkblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text1: {
        fontSize: 20,
    },
    Text2: {
        fontSize: 15,
    }
})

export default Sign