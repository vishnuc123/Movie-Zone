import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { getMovies } from '../service/getMovies'

const MovieList = () => {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async() => {
            const movieData = await getMovies()
            // console.log("moviedata",movieData)
            setMovies(movieData)
        }
        fetchMovies()
    },[])
    console.log("movies",movies)
  return (
    <div className='bg-black'>
      <SearchBar />
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {movies.map((movie :any) => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>

    </div>
  )
}

export default MovieList
