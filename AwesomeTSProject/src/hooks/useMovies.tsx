import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [moviesOnCine, setMoviesInCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await movieDb.get<MovieDBNowPlaying>('/now_playing');
    setMoviesInCine(response.data.results);
    
    setIsLoading(false)
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);


  return { moviesOnCine, isLoading };
};
