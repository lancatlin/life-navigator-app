import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import PrefferedTimeScreen from './src/screens/PrefferedTimeScreen';
import TimeSettingScreen from './src/screens/TimeSettingScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import GoalDetailScreen from './src/screens/GoalDetailScreen';

import GoalCreateScreen from './src/screens/GoalCreateScreen';
import sessionScreen from './src/screens/sessionScreen';
import CalenderScreen from './src/screens/CalenderScreen';
import SettingScreen from './src/screens/SettingScreen';

const Stack = createStackNavigator();

const StackCreate = () => (
  <Stack.Navigator initialRouteName="Create session">
    <Stack.Screen name="Create session" component={GoalCreateScreen} />
    <Stack.Screen name="Parent Session" component={sessionScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const goalsFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="Goals List" component={GoalsScreen} options={{ headerTitleAlign: 'center' }} />
    <Stack.Screen name="Detail" component={GoalDetailScreen} options={({ route }) => ({ headerTitleAlign: 'center', title: route.params.goal })} />
  </Stack.Navigator>
);

const settings = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingScreen} options={{ headerTitleAlign: 'center' }} />
  </Stack.Navigator>
);

const calenderFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="Calender" component={CalenderScreen} options={{ headerTitleAlign:'center' }}/>
  </Stack.Navigator>
)
export default () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Sign in" component={SigninScreen} />
      <Tab.Screen name="Sign up" component={SignupScreen} />
      <Tab.Screen name="Preefered" component={PrefferedTimeScreen} />
      <Tab.Screen name="TimeSetting" component={TimeSettingScreen} />
      <Tab.Screen name="Create" component={StackCreate} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Goals" component={goalsFlow} />
      <Tab.Screen name="Calender" component={calenderFlow} />
      <Tab.Screen name="Settings" component={settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
