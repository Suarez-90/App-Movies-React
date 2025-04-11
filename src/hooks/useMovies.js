import { useState } from "react";
import searchMovies from '../services/movies'
import { useRef } from "react";


export function useMovies({search}) {
  const [movies, setMovies]=useState([])
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const valueSearch = useRef({search})

  
  const getMovies = async () => {
    if (valueSearch.current=== search) return
    try {
      setLoading(true)
      setError(null)
      valueSearch.current = search
      const newMovies = await searchMovies({search})
      setMovies(newMovies)      
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  return { movies, loading, getMovies}
}