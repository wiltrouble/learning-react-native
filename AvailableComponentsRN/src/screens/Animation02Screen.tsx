import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Animation01Screen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.purpleBox}/>
    </View>
  )
}

export default Animation01Screen

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#d2d2d2',
    width: 150,
    height: 150,
  }
})