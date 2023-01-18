import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8, borderColor: colors.border}}/>
  )
}

export default ItemSeparator

const styles = StyleSheet.create({})