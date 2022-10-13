import 'react-native-gesture-handler';
import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Movie} from '../../interfaces/movieInterface';
import MoviePoster from '../moviePoster';

interface Props {
  movies: Movie[];
}

const MovieCarousel = ({movies}: Props) => {
  const {width, height} = Dimensions.get('window');
  console.log(width);
  
  return (
      <Carousel
        mode='parallax'
        loop
        width={width}
        height={500}
        autoPlay={true}
        data={movies}
        scrollAnimationDuration={1000}
        onSnapToItem={( index ) => console.log('current index:', index)}
        renderItem={({item}) => <MoviePoster movie={item} key={item.id}/>}
      />
  );
};

export default MovieCarousel;
