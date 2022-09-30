import axios from 'axios'

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '67302b619a227d293c838af54d01fd40',
    language: 'en-US'
  }
})

export default movieDb

