import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native'
import Navigator from './src/navigation/Navigator'

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme  .colors,
    // primary: string;
    // background: string;
    // card: string;
    // text: 'white',
    // border: string;
    // notification: string;
  }
}

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})