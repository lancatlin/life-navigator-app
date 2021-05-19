import './shim';
import React, { useContext, useEffect } from 'react';
import { Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SessionsScreen from './src/screens/SessionsScreen';
import NewSessionScreen from './src/screens/NewSessionScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import GoalDetailScreen from './src/screens/GoalDetailScreen';

import GoalCreateScreen from './src/screens/GoalCreateScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import SettingScreen from './src/screens/SettingScreen';
import ExecuteScreen from './src/screens/ExecuteScreen';

import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';

const Stack = createStackNavigator();

const StackCreate = () => (
  <Stack.Navigator initialRouteName="Create session">
    <Stack.Screen name="Create session" component={GoalCreateScreen} options={{ headerTitleAlign: 'center' }} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const goalsFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="GoalList" component={GoalsScreen} options={{ headerTitleAlign: 'center' }} />
    <Stack.Screen name="GoalDetail" component={GoalDetailScreen} options={({ route }) => ({ headerTitleAlign: 'center', title: route.params.goal })} />
  </Stack.Navigator>
);

const settings = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingScreen} options={{ headerTitleAlign: 'center' }} />
  </Stack.Navigator>
);

const scheduleFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="Schedule" component={ScheduleScreen} options={{ headerTitleAlign: 'center' }} />
  </Stack.Navigator>
);

const sessionsFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="Sessions" component={SessionsScreen} options={{ headerTitleAlign: 'center' }} />
    <Stack.Screen
      name="NewSession"
      component={NewSessionScreen}
      options={{
        headerTitleAlign: 'center',
      }}

    />
  </Stack.Navigator>
);

const queryClient = new QueryClient();

const App = () => {
  const { state, restoreToken } = useContext(AuthContext);

  useEffect(() => {
    restoreToken();
  }, []);

  if (state.isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      {
        true
          ? (
            <Tab.Navigator>
              <Tab.Screen name="Sessions" component={sessionsFlow} />
              <Tab.Screen name="Create" component={StackCreate} />
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Goals" component={goalsFlow} />
              <Tab.Screen name="Schedule" component={scheduleFlow} />
              <Tab.Screen name="Settings" component={settings} />
              <Tab.Screen name="Execute" component={ExecuteScreen} />
            </Tab.Navigator>
          )
          : (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Signin" component={SigninScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
          )
      }
    </NavigationContainer>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider value={AuthContext}>
      <App />
    </AuthProvider>
  </QueryClientProvider>

);
