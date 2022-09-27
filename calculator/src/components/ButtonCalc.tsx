import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  title: string;
  color?: string;
  bottonWidth?: boolean;
  action: ( numberText: string ) => void;
}

const ButtonCalc = ({
  title,
  color = "#2d2d2d",
  bottonWidth = false,
  action
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(title)}>
      <View
        style={[
          styles.button,
          { backgroundColor: color, width: bottonWidth ? 180 : 80 },
        ]}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: color === "#9b9b9b" ? "black" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "black",
    fontWeight: "300",
  },
});
