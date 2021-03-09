import React from 'react'
import { StyleSheet } from 'react-native'
import Sign from '../components/Sign'

const SignupScreen = ({ title, ButtonText }) => {
    return(
        <>
            <Sign 
                title='Signup' 
                ButtonText='Signup'
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default SignupScreen