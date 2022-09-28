import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import globalStyle from "../theme/appTheme";
import ButtonCalc from "../components/ButtonCalc";
import { useCalc } from "../hooks/useCalc";

const CalculatorScreen = () => {
  const {
    pastNumber,
    number,
    clean,
    positiveNegative,
    btnDelete,
    btnSplit,
    buildNumber,
    btnMultiply,
    btnSubstract,
    calc,
    btnSum
  } = useCalc();

  return (
    <View style={globalStyle.container}>
      {pastNumber !== "0" && (
        <Text style={globalStyle.lastResult}>{pastNumber}</Text>
      )}
      <Text style={globalStyle.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc title="C" color="#9b9b9b" action={clean} />
        <ButtonCalc title="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc title="DEL" color="#9b9b9b" action={btnDelete} />
        <ButtonCalc title="/" color="#ff9427" action={btnSplit} />
      </View>
      <View style={styles.row}>
        <ButtonCalc title="7" action={buildNumber} />
        <ButtonCalc title="8" action={buildNumber} />
        <ButtonCalc title="9" action={buildNumber} />
        <ButtonCalc title="x" color="#ff9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc title="4" action={buildNumber} />
        <ButtonCalc title="5" action={buildNumber} />
        <ButtonCalc title="6" action={buildNumber} />
        <ButtonCalc title="-" color="#ff9427" action={btnSubstract} />
      </View>
      <View style={styles.row}>
        <ButtonCalc title="1" action={buildNumber} />
        <ButtonCalc title="2" action={buildNumber} />
        <ButtonCalc title="3" action={buildNumber} />
        <ButtonCalc title="+" color="#ff9427" action={btnSum} />
      </View>
      <View style={styles.row}>
        <ButtonCalc title="0" bottonWidth action={buildNumber} />
        <ButtonCalc title="." action={buildNumber} />
        <ButtonCalc title="=" color="#ff9427" action={calc} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
