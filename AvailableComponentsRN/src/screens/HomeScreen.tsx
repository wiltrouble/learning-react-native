import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle'
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {
  
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        ListHeaderComponent={() => <HeaderTitle title='Menu options'/>}
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={ () => <ItemSeparator /> }
      />
    </View>
  );
};

export default HomeScreen;


