import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';


const MapComponent = () => {
  
  return (
    <>
      <MapView
        style={{flex: 1, ...StyleSheet.absoluteFillObject}}

        initialRegion={{
          latitude: -17.4018936,
          longitude: -66.0377982,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </>
  )
}

export default MapComponent

const styles = StyleSheet.create({})