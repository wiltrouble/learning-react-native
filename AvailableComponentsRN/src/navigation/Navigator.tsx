import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Animation01Screen from '../screens/Animation01Screen';
import Animation02Screen from '../screens/Animation02Screen';
import SwitchScreen from '../screens/SwitchScreen'


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name="Animation01Screen" component={Animation01Screen} />
      <Stack.Screen name="Animation02Screen" component={Animation02Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
    </Stack.Navigator>
  )
}

export default Navigator