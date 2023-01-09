import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin', 'Thor', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2', 'Spiderman', 'Antman2', 'Thor', 'Spiderman', 'Antman2'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={ () => <HeaderTitle title='Section list'/>}
        ListFooterComponent = { () => <HeaderTitle title={"total casas: " + casas.length}/>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{ backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={ ({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        ItemSeparatorComponent={ () => <ItemSeparator />}
        SectionSeparatorComponent={ () => <ItemSeparator />}
        showsVerticalScrollIndicator={ false }
      />
    </View>
  );
};

export default SectionListScreen;
