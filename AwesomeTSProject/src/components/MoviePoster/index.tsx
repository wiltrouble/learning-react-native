import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 490, width = 390}: Props) => {
  const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', movie)} activeOpacity={0.8} style={{width, height, marginHorizontal: 5, marginVertical: 8}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: url}} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
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
  },
});
