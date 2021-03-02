import React from 'react'
import { Text, Button, Inuput } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Sign from '../components/Sign'

const SigninScreen = ({ title, ButtonText }) => {
    return(
        <>
            <Sign 
                title='Signin' 
                ButtonText='Login'
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default SigninScreen