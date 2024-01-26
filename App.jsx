import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './src/pages/DetailScreen';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6495ed',
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 18},
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login', headerBackTitleVisible: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Detay', headerBackTitleVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
