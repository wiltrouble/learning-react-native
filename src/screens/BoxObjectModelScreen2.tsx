import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  )
}

export default BoxObjectModelScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center'
  },
  box1: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6'
  },
  box2: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'red'
  },
  box3: {
    width: '100%',
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b'
  }
})
