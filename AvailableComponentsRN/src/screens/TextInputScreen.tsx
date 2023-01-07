import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import CustomSwitch from '../components/CustomSwitch';
import {useForm} from '../hooks/useForm';

const TextInputScreen = () => {

  const {form, onChange, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="text inputs" />
          <TextInput
            style={stylesScreen.input}
            placeholder="name"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.input}
            placeholder="email"
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
          />
          <TextInput
            style={stylesScreen.input}
            placeholder="phone"
            keyboardType="number-pad"
            onChangeText={value => onChange(value, 'phone')}
          />
          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>Susbcribe:</Text>
            <CustomSwitch
              isOn={isSuscribed}
              onChange={value => onChange(value, 'isSuscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesScreen = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
