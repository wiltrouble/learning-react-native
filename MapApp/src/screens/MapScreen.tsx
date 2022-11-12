import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1, ...StyleSheet.absoluteFillObject}}>
      <MapView
        style={{flex: 1, ...StyleSheet.absoluteFillObject}}
        // provider={ PROVIDER_GOOGLE }
        initialRegion={{
          latitude: -17.4018936,
          longitude: -66.0377982,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
