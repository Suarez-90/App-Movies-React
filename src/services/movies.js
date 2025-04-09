const API_KEY = '4287ad07'
const URL_API = `https://www.omdbapi.com/?apikey=${API_KEY}`

export default async function searchMovies({search}) {
    if (search === '') return null

    try {
        const response = await fetch(`${URL_API}&s=${search}`)
        const json =  await response.json()

        const movies = json.Search
        
        return movies?.map(movie =>({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (error) {
        throw new Error("Error Searching Movies "+ error);
        
    }
}   