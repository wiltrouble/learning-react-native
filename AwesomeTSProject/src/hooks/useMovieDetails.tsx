import React, { useState, useEffect } from 'react'
import movieDb from '../api/movieDB';
import { Cast, CreditResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull
  cast: Cast[]
}

const useMovieDetails = ( movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })

  const getMovieDetails = async() => {
    const movieDetailsPromise = await movieDb.get<MovieFull>(`/${ movieId }`)
    const castPromise = await movieDb.get<CreditResponse>(`/${ movieId }/credits`)


    const [ movieDetailsResponse, castResponse ] = await Promise.all([
      movieDetailsPromise,
      castPromise
    ])

    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castResponse.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails();
  }, [])

  return {
    ...state 
  }
  
}



export default useMovieDetails