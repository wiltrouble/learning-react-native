import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext} from 'react';

import PermissionScreen from '../screens/PermissionScreen';
import {PermissionContext} from '../context/PermissionsContext';
import LoadingScreen from '../screens/LoadingScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {permissions} = useContext(PermissionContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Permission"
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: 'white'},
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="Map" component={MapScreen} />
      ) : (
        <Stack.Screen name="Permission" component={PermissionScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
