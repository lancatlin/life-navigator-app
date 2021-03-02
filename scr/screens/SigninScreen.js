import React from 'react'
import { Text, Button, Inuput } from 'react-native-elements'
import { styleSheet } from 'react-native'
import Sign from '../components/Sign'

const SigninScreen = () => {
    <>
        <Sign 
            title='Signin' 
            ButtonText='Login'
        />
    </>
}

const styles = styleSheet.creat({})

export default SigninScreen