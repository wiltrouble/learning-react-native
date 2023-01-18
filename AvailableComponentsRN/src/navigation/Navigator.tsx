import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Animation01Screen from '../screens/Animation01Screen';
import Animation02Screen from '../screens/Animation02Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from '../context/themeContext/ThemeContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={
          {
            // headerShown: false

            statusBarColor: theme.colors.card
          }
        }>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation01Screen" component={Animation01Screen} />
        <Stack.Screen name="Animation02Screen" component={Animation02Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
