import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import GoalCreateScreen from './src/screens/GoalCreateScreen';
import sessionScreen from './src/screens/sessionScreen';
const Stack = createStackNavigator();

const StackCreate = () => (
  <Stack.Navigator initialRouteName="Create">
    <Stack.Screen name="Create" component={GoalCreateScreen} />
    <Stack.Screen name="Create Session" component={sessionScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Create" component={StackCreate} />
      <Tab.Screen name="Auth" component={AuthScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
