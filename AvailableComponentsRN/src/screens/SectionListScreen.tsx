import {SectionList, StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

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
  
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={ () => <HeaderTitle title='Section list'/>}
        ListFooterComponent = { () => <HeaderTitle title={"total casas: " + casas.length}/>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{ backgroundColor: colors.background}}>
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
