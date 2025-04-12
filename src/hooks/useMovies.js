import { useState, useMemo } from "react";
import searchMovies from '../services/movies'
import { useRef } from "react";
import { useCallback } from "react";


export function useMovies({search, sort}) {
  const [movies, setMovies]=useState([])
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const valueSearch = useRef({search})

  
  const getMovies = useCallback(async ({search}) => {      
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
    },[])

  const sortedMovies = useMemo(()=> { 
    console.log('sort Movies')
   return sort ? [...movies].sort((a,b)=> a.title.localeCompare(b.title)) : movies
  },[movies, sort])
  // const sortedMovies = useMemo(() =>{ 
  //  return sort ? [...movies].sort((a,b)=> a.title.localeCompare(b.title)) : movies
  // }, [movies, sort]) 
  
  
  return { movies: sortedMovies, loading, getMovies}
}