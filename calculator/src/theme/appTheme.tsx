import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,

  },
  lastResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',

  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },

})

export default globalStyle