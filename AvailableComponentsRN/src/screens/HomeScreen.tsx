import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle'

const HomeScreen = () => {
  

  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}}/>
    )
  }
  
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        ListHeaderComponent={() => <HeaderTitle title='Menu options'/>}
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={ () => itemSeparator() }
      />
    </View>
  );
};

export default HomeScreen;


