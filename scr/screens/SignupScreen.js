import React from 'react'
import { Text, Button, Inuput } from 'react-native-elements'
import { styleSheet } from 'react-native'
import Sign from '../components/Sign'

const SignupScreen = () => {
    <>
        <Sign 
            title='Signup' 
            ButtonText='Signup'
        />
    </>
}

const styles = styleSheet.creat({})

export default SignupScreen