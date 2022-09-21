import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import FloatingActionButton from "../components/FloatingActionButton";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      {/* <TouchableOpacity style={styles.fabLocationBL} onPress={() => setCounter(counter - 1)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>-1</Text>
        </View>
      </TouchableOpacity> */}

      <FloatingActionButton title="+1" onPress={ () => setCounter( counter + 1)} />
      <FloatingActionButton title="-1" onPress={ () => setCounter( counter - 1)} position='bl'/>


    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    top: -15,
  },
  
});
