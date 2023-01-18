import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

const SwitchScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Switches" />
      <View style={stylesScreen.switchRow}>
        <Text style={{...stylesScreen.switchText, color: colors.text}}>
          isActive
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={stylesScreen.switchRow}>
        <Text style={{...stylesScreen.switchText, color: colors.text}}>
          isHungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={stylesScreen.switchRow}>
        <Text style={{...stylesScreen.switchText, color: colors.text}}>
          isHappy
        </Text>

        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={{...stylesScreen.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

export default SwitchScreen;

const stylesScreen = StyleSheet.create({
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
