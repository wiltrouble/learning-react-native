import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {moviesOnCine, isLoading} = useMovies();
 const { top } = useSafeAreaInsets();

  console.log(moviesOnCine[0]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
        <ActivityIndicator color="red" size={ 100 }/>
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20}}>
      <MoviePoster movie={ moviesOnCine[0]}/>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({});
