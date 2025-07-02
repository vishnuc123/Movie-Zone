import { API_KEY, BASE_URL } from "../apis/api"

export const getSearchMovies = async (query:string) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const movies = await response.json()
    return movies.results;
}