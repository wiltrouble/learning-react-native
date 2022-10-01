import 'react-native-gesture-handler';
import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Movie, MovieDBNowPlaying} from '../../interfaces/movieInterface';
import MoviePoster from '../moviePoster';
import {useMovies} from '../../hooks/useMovies';

const MovieCarousel = () => {
  const width = Dimensions.get('window').width;
  const {moviesOnCine, isLoading} = useMovies();
  console.log(moviesOnCine[0]);
  
  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={400}
        autoPlay={false}
        data={moviesOnCine}
        scrollAnimationDuration={1000}
        // onSnapToItem={( index ) => console.log('current index:', index)}
        renderItem={({item}) => <MoviePoster movie={item} />}
      />
    </View>
  );
};

export default MovieCarousel;
