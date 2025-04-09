import  ListMovies from "../mocks/result.json";

export function useMovies() {
    const movies = ListMovies.Search
  
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return { mappedMovies}
  }