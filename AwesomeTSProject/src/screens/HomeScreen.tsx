import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/moviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MovieCarousel from '../components/carousel';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const {moviesOnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const width = Dimensions.get('window').width;

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top}}>
        <View>
          <MovieCarousel movies={moviesOnCine} />
        </View>

        <View style={{backgroundColor: 'red', height: 250}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>En cine</Text>
          <FlatList
            data={moviesOnCine}
            renderItem={({item}): any => (
              <MoviePoster movie={item} height={200} width={140} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
