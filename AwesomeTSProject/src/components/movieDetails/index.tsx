import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {MovieFull} from '../../interfaces/movieInterface';
import {Cast} from '../../interfaces/creditsInterface';
import {CurrencyDollarIcon, StarIcon} from 'react-native-heroicons/outline';
import currencyFormater from 'currency-formatter';
import CastItem from '../CastItem';


interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetailsComponent = ({movieFull, cast}: Props) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
        <StarIcon color="gray" />
        <Text style={{marginLeft: 5}}>{movieFull.vote_average}</Text>
        <Text>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
      </View>
      <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
        Historia
      </Text>

      <Text style={{fontSize: 16}}>{movieFull.overview}</Text>

      <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
        Presupuesto
      </Text>
      <Text style={{fontSize: 18}}>
        {currencyFormater.format(movieFull.budget, {code: 'USD'})}
      </Text>

      {/* Casting */}
      <View style={{marginBottom: 100}}>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Actores
        </Text>
        <FlatList
        style={{marginTop: 10}}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MovieDetailsComponent;
