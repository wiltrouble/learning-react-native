import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen';
import PermissionScreen from '../screens/PermissionScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='Permission'
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="Permission" component={PermissionScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
