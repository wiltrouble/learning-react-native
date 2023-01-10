import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i
    }

    setNumbers([...numbers, ...newArray])
  }

  const renderItem = (item: number) => {
    return <Image source={{ uri: `https:picsum.photos/id/${ item }/500/400`}} style={{width: '100%', height: 400}}/>;
  };
  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => item.toString() + index}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}
        onTouchEnd={loadMore}
        onEndReachedThreshold={0.5}

        ListFooterComponent={ () => (
          <View style={{height: 150, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={ 20 } color="#5856d6"/>
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
