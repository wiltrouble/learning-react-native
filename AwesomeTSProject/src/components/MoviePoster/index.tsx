import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

const MoviePoster = ({movie}: Props) => {
  const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: url}} />

      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 400,
  },
  image: {
    flex: 1,
    borderRadius: 15,

  },
  imageContainer: {
    borderRadius: 18,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 5,
  }
});