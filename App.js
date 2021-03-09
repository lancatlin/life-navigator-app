import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import GoalDetailScreen from './src/screens/GoalDetailScreen';

import GoalCreateScreen from './src/screens/GoalCreateScreen';
import sessionScreen from './src/screens/sessionScreen';
import CalenderScreen from './src/screens/CalenderScreen';
import SettingScreen from './src/screens/SettingScreen';

const Stack = createStackNavigator();

const StackCreate = () => (
  <Stack.Navigator initialRouteName="Create">
    <Stack.Screen name="Create" component={GoalCreateScreen} />
    <Stack.Screen name="Create Session" component={sessionScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const goalsFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="Goals List" component={GoalsScreen} options={{ headerTitleAlign: 'center' }} />
    <Stack.Screen name="Detail" component={GoalDetailScreen} options={{ headerTitleAlign: 'center' }} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Create" component={StackCreate} />
      <Tab.Screen name="Auth" component={AuthScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Goals" component={goalsFlow} />
      <Tab.Screen name="Calender" component={CalenderScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
