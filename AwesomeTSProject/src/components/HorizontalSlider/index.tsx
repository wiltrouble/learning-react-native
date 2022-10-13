import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import { Movie } from '../../interfaces/movieInterface';
import MoviePoster from '../moviePoster'

interface Props {
  movies: Movie[];
  title?: string;
}

const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View>
      {title && <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}): any => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;

const styles = StyleSheet.create({});
