import {ActivityIndicator, Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/moviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieCarousel from '../components/carousel';

const HomeScreen = () => {
  const {moviesOnCine, isLoading} = useMovies();
 const { top } = useSafeAreaInsets();
 const width = Dimensions.get('window').width;

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
        <ActivityIndicator color="red" size={ 100 }/>
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20, }}>
      <MovieCarousel movies={moviesOnCine}/>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    
    
  }
});
