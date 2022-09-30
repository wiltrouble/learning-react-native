import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen'
import DetailScreen from '../../screens/DetailScreen'

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white'
        }
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default StackNavigator;