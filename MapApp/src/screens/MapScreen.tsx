import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapComponent from '../components/MapComponent';

const MapScreen = () => {
  return (
    <View style={{flex: 1, ...StyleSheet.absoluteFillObject}}>
      <MapComponent />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
