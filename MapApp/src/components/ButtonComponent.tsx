import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>
}

const ButtonComponent = ({ title, onPress, style = {}}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={{...styles.button, ...style as any}}>
      <Text style={styles.buttonText}>{ title }</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
  }
})