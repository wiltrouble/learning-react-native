import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import CalculatorScreen from './src/screens/CalculatorScreen'
import globalStyle from "./src/theme/appTheme";


const App = () => {
  return (
    <SafeAreaView style={globalStyle.background}>
      <StatusBar backgroundColor='black' barStyle='light-content'/>
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App