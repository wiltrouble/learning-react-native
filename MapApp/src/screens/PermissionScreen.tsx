import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import { PermissionContext } from '../context/PermissionsContext'
import ButtonComponent from '../components/ButtonComponent'

const PermissionScreen = () => {

  const { permissions, askLocationPermission } = useContext( PermissionContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Es necesario activar el gps para utilizar la applicacion</Text>
      <ButtonComponent title='Permisos' onPress={askLocationPermission}/>
      <Text>
        { JSON.stringify( permissions, null, 5)}
      </Text>
    </View>
  )
}

export default PermissionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  }
})