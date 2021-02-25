import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Sign in" component={AuthScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
