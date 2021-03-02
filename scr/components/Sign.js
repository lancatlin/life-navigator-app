import React from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'

const Sign = ({ title, ButtonText }) => {
    <>
        <Text>{title}</Text>
        <Input label='Email' />
        <Input lable='Password' />
        <Button title={ButtonText} />
        <Button title='Google Login' />
        <Button title='Facebook Login' />
    </>
}

const styles = StyleSheet.create({})

export default Sign