import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native'


const SettingScreen = () =>{
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        
        <View>
            <View style={styles.header}>
                <Text style={styles.topTitle}>Settings</Text>
            </View>

            <View>
                <Text style={styles.midleTitle}> Appearance </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.options}> Dark Mode </Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    tumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.options}> Theme Color </Text>
                <TouchableOpacity style={styles.color}/>
            </View>

            <View>
                <Text style={styles.midleTitle}> Session </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.options}> Begin Time </Text>
                <TouchableOpacity style={styles.time}>
                    <Text style={styles.buttonText}> Begin Time </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <Text style={styles.options}> End Time </Text>
                <TouchableOpacity style={styles.time}>
                    <Text style={styles.buttonText}> End Time </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.center}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Use Sleep Time as Default </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'green',
        height: 70
    },
    topTitle: {
        top: 20,
        fontSize: 25,
        alignSelf: 'center'
    },
    midleTitle: {
        margin: 20,
        top: 20,
        fontSize: 20,
    },
    options: {
        margin: 10,
        marginTop: 20,
        marginLeft: 20,
        fontSize: 15
    },
    button: {
        top: 45,
        padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 9,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    buttonText: {
        fontSize: 15
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    time: {
        right: 30,
        height: 30,
        width: 115,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },
    color: {
        right: 30,
        height: 30,
        width: 30,
        alignItems: 'center',
        backgroundColor: `rgb(255,0,0)`
    },
    switch: {
        right: 23
    }
})

export default SettingScreen