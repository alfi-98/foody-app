import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js'
import RestaurantScreen from './screens/RestaurantScreen.js'
import { Provider } from 'react-redux';
import { store } from './store.js';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
