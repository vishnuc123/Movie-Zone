import  { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { getMovies } from '../service/getMovies'
import { getSearchMovies } from '../service/getSearchMovies'
import { useNavigate } from 'react-router-dom'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [originalMovies, setOriginalMovies] = useState([])
    const [searchquery,setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleBack =() => {
        navigate('/')
    }

    const handleSearch = async (e:any) => {
        e.preventDefault()
        if(!searchquery.trim()){
            setMovies(originalMovies)
            return
        }
            
            
            const moviedata =await getSearchMovies(searchquery)
            setMovies(moviedata)
        
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const movieData = await getMovies()
            // console.log("moviedata",movieData)
            setMovies(movieData)
            setOriginalMovies(movieData)
        }
        fetchMovies()
    }, [])

    console.log("movies", movies)
    return (
        <div className='bg-black'>
            <div className='bg-black'>
  <div className='flex justify-center items-center p-5'>
    <button onClick={handleBack} className='bg-white mr-3 px-3 cursor-pointer hover:bg-red-500 rounded-full w-[100px] h-10 font-semibold'> back</button>
    <form onSubmit={handleSearch} className='flex items-center gap-4'>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchquery}
        type="text"
        className='w-[400px] h-10 border-2 focus:border-red-700 outline-none p-4 border-white text-white font-serif italic text-xl bg-black'
        placeholder='Enter Movie Names ....'
      />
      <button
        type='submit'
        className="flex items-center px-4 py-2 font-semibold bg-white text-black hover:bg-red-500 rounded-full transition duration-200 justify-center cursor-pointer"
      >
        Search
      </button>
    </form>
  </div>
</div>


           {movies.length === 0 ? (
  <p className='text-white text-center text-3xl font-semibold p-5'>No movies available</p>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {movies.map((movie: any) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
)}


        </div>
    )
}

export default MovieList
