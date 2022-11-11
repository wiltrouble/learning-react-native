import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import { PermissionContext } from '../context/PermissionsContext'

const PermissionScreen = () => {

  const { permissions, askLocationPermission } = useContext( PermissionContext)

  return (
    <View style={styles.container}>
      <Text>PermissionScreen</Text>
      <Button title="Permiso" onPress={ askLocationPermission }/>
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
  }
})