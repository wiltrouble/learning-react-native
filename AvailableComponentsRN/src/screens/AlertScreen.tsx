import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import prompt from 'react-native-prompt-android';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const AlertScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My alert msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK pressed"'),
        },
      ],
      {cancelable: true, onDismiss: () => console.log('On dismiss')},
    );
  };

  const showPront = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
    // Alert.prompt(
    //   'Are you sure?',
    //   'THIS ACTIOS IS UNIQUE',
    //   ( value: string) => console.log('info: ', value),
    //   'plain-text',
    //   'wilson',
    //   'number-pad'
    // )
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={showAlert}
        style={{
          width: '100%',
          height: 50,
          borderRadius: 10,
          backgroundColor: colors.primary,
          justifyContent: 'center',
        }}>
        <Text style={{color: colors.text, textAlign: 'center', fontSize: 22}}>
          Show Alert
        </Text>
      </TouchableOpacity>
      <View style={{height: 10}} />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={showPront}
        style={{
          width: '100%',
          height: 50,
          borderRadius: 10,
          backgroundColor: colors.primary,
          justifyContent: 'center',
        }}>
        <Text style={{color: colors.text, textAlign: 'center', fontSize: 22}}>
          Show Pront
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertScreen;
