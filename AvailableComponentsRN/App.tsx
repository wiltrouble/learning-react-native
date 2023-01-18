import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <AppState>
        <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return(
  <ThemeProvider>{children}</ThemeProvider>

  )
};

export default App;
