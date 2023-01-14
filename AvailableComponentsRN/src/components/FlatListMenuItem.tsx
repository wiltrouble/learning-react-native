import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import {useNavigation, useTheme} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </Text>
        <ChevronRightIcon color={colors.text} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
