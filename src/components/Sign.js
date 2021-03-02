import React from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
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
                <Button 
                    title={ButtonText}
                    type= 'outline'
                    style={styles.Button1} 
                />
            </Spacer>
            <Spacer>
                <Button title='Google Login' />
            </Spacer>
            <Spacer>
                <Button title='Facebook Login' />
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
        color: 'red',
        TextC
    }
})

export default Sign