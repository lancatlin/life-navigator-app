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

const Stack = createStackNavigator();
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
      <Tab.Screen name="Sign in" component={AuthScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Goals" component={goalsFlow} />
    </Tab.Navigator> 
  </NavigationContainer>
);
