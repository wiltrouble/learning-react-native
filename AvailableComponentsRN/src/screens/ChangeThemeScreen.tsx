import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setDarkTheme}
          style={{
            width: 150,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setLightTheme}
          style={{
            width: 150,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;
