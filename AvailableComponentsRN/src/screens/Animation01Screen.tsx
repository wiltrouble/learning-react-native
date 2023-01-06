import {Animated, Button, StyleSheet, View} from 'react-native';
import React from 'react';
import { useAnimation } from '../hooks/useAnimation';

const Animation01Screen = () => {
  const {startMoving, opacity, fadeIn, fadeOut, position} = useAnimation()

  return (
    <View style={styles.container}>
      <Animated.View
        style={{...styles.purpleBox, opacity: opacity, marginBottom: 20, transform: [{
          translateY: position
        }]}}
      />

      <Button title="Fade In" onPress={() => {
        fadeIn() 
        startMoving(100)}} />
      <Button title="Fade Out " onPress={fadeOut} />
    </View>
  );
};

export default Animation01Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
