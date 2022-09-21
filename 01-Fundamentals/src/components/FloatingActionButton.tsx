import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import React from "react";

interface Props {
  title: string;
  position?: "br" | "bl";
  onPress: () => void;
}

const FloatingActionButton = ({ title, onPress, position = "br" }: Props) => {

  const ios = () => {
    return(
    <TouchableOpacity
      activeOpacity={ 0.8 }
      style={[
          styles.fabLocation,
          position === "bl" ? styles.left : styles.right,
        ]} 
        
        onPress={onPress}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
    )
  }

  const android = () => {
    return (
    <View
      style={[
          styles.fabLocation,
          position === "bl" ? styles.left : styles.right,
        ]} >
      <TouchableNativeFeedback
        
        onPress={onPress}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
    )
  }

  return Platform.OS === 'ios' ? ios() : android()
  
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#5856d6",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  fabLocation: {
    position: "absolute",
    bottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 2,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
});
