import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Cast} from '../../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{actor.name}</Text>
        <Text style={{color: 'black', opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5,
    elevation: 9,
    marginRight: 15,
    paddingRight: 15 ,
    marginVertical: 20
  },
  actorInfo: {
    marginLeft: 10,
    paddingTop: 6
  },
});
