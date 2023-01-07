import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

const AlertScreen = () => {
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
      {cancelable: true,
      onDismiss: () => console.log('On dismiss')
      },
    );
  };


  const showPront = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder'
      }
  );
    // Alert.prompt(
    //   'Are you sure?',
    //   'THIS ACTIOS IS UNIQUE',
    //   ( value: string) => console.log('info: ', value),
    //   'plain-text',
    //   'wilson',
    //   'number-pad'
    // )

  }
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Show Pront" onPress={showPront} />
    </View>
  );
};

export default AlertScreen;
