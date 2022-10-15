import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams} from '../navigation/StackNavigator';
import {ScrollView} from 'react-native-gesture-handler';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetailsComponent from '../components/movieDetails';

const height = Dimensions.get('screen').height;

interface Props
  extends NativeStackScreenProps<RootStackParams, 'DetailsScreen'> {}

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={{flex: 1}} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subtitle}>{movie.title}</Text>
      </View>

      {isLoading ? <ActivityIndicator /> : <MovieDetailsComponent movieFull={movieFull!} cast={cast} />}
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 5,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
});
