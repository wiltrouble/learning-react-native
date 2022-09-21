import { SafeAreaView, StyleSheet } from "react-native";
import BoxObjectModelScreen from "./src/screens/BoxObjectModelScreen3";
import CounterScreen from "./src/screens/CounterScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28425b",
  },
});
