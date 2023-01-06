import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';



const menuItems: MenuItem[] = [
  {
    name: 'animatin01',
    component: 'Animation01Screen',
  },
  {
    name: 'animatin02',
    component: 'Animation02Screen',
  }
];

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top, marginBottom: 20}}>
        <Text style={styles.title}>Menu options</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}}/>
    )
  }
  
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        ListHeaderComponent={renderListHeader}
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={ () => itemSeparator() }
      />
    </View>
  );
};

export default HomeScreen;


