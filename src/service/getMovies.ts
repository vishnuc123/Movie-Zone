import { API_KEY, BASE_URL } from "../apis/api"

export const getMovies = async () => {
    const data = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const movies = await data.json()
    return movies.results
}