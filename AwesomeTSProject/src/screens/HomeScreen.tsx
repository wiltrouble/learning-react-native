import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MovieCarousel from '../components/carousel';
import {ScrollView} from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

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
          <MovieCarousel movies={nowPlaying} />

          <HorizontalSlider movies={popular} title="Popular"/>
          <HorizontalSlider movies={topRated} title="Top"/>
          <HorizontalSlider movies={upcoming} title="Upcomming"/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
